import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useMemo} from "react";
import {createKeyForUseQuery, hasNextPage} from "utils/utils";
import {useInfiniteQuery} from "react-query";
import getVendors from "api/getVendors";
import {EVendorsId} from "utils/Const";

interface IUseVendorListResult {
  queryKey: string;
  categoryId: EVendorsId[];
  filterQuery?: string[];
  staleTime?: number;
  initialFilter?: {[x: string]: string};
  withLocation?: boolean;
}

function useVendorListResult(props: IUseVendorListResult) {
  const {queryKey, categoryId, filterQuery, staleTime, initialFilter = {}, withLocation = true} = props;
  const router = useRouter();
  const {isStorageLoaded, location, userAddress, isUserAddressStorageLoaded} = useSelector(selectAddressMap);

  // const pageNumber = useMemo(() => queryPageNumber(router.query.page), [router.query.page]);

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {
      "category[]": categoryId,
      ...initialFilter,
    };
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      delete tmpParams?.vendor;
      delete tmpParams?.page;
      if (withLocation && isUserAddressStorageLoaded && isStorageLoaded) {
        if (userAddress?.latitude && userAddress.longitude) {
          tmpParams.lat = userAddress.latitude;
          tmpParams.lon = userAddress.longitude;
        } else if (location?.lat && location?.lng) {
          tmpParams.lat = location.lat;
          tmpParams.lon = location.lng;
        }
      }
      filterQuery?.forEach((item) => {
        if (router.query.hasOwnProperty(item)) {
          tmpParams[item] = router.query[item];
        }
      });
    }
    return tmpParams;
  }, [
    categoryId,
    filterQuery,
    initialFilter,
    isStorageLoaded,
    isUserAddressStorageLoaded,
    location?.lat,
    location?.lng,
    router.isReady,
    router.query,
    userAddress?.latitude,
    userAddress?.longitude,
    withLocation,
  ]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [queryKey];
    // const page = router.query?.page;
    // tmpKeys = createKeyForUseQuery(tmpKeys, page);
    categoryId.forEach((item) => {
      tmpKeys = createKeyForUseQuery(tmpKeys, item.toString());
    });
    if (withLocation && isUserAddressStorageLoaded && isStorageLoaded) {
      if (userAddress?.latitude && userAddress.longitude) {
        tmpKeys = createKeyForUseQuery(tmpKeys, userAddress.latitude.toString());
        tmpKeys = createKeyForUseQuery(tmpKeys, userAddress.longitude.toString());
      } else if (location?.lat && location?.lng) {
        tmpKeys = createKeyForUseQuery(tmpKeys, location.lat.toString());
        tmpKeys = createKeyForUseQuery(tmpKeys, location.lng.toString());
      }
    }
    filterQuery?.forEach((item) => {
      if (router.query.hasOwnProperty(item)) {
        const tmp = router.query[item];
        tmpKeys = createKeyForUseQuery(tmpKeys, tmp);
      }
    });
    return tmpKeys;
  }, [
    categoryId,
    filterQuery,
    isStorageLoaded,
    isUserAddressStorageLoaded,
    location?.lat,
    location?.lng,
    queryKey,
    router.query,
    userAddress?.latitude,
    userAddress?.longitude,
    withLocation,
  ]);

  const useInfiniteQueryEnabled = useMemo(() => {
    if (withLocation) {
      return isStorageLoaded && isUserAddressStorageLoaded && router.isReady;
    } else {
      return router.isReady;
    }
  }, [isStorageLoaded, isUserAddressStorageLoaded, router.isReady, withLocation]);

  // return useQuery(keys, () => getVendors({params}), {staleTime, enabled: useQueryEnabled});
  return useInfiniteQuery(keys, ({pageParam}) => getVendors({params, pageParam}), {
    staleTime,
    enabled: useInfiniteQueryEnabled,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total;
      const page = allPages.length;
      if (hasNextPage({page, total})) {
        return page + 1;
      }
      return undefined;
    },
  });
}

export default useVendorListResult;
