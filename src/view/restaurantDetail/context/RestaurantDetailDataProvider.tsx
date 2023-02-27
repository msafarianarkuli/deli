import React, {createContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import getVendorsDetail from "api/getVendorDetail";

const initialState: IDataContextProvider<IGetVendorDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantDetailDataContext = createContext<IDataContextProvider<IGetVendorDetailData>>(initialState);

export const QUERY_KEY_RESTAURANT_DETAIL = "restaurantDetail";
const staleTime = 10 * 60 * 1000;

function RestaurantDetailDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();
  const result = useQuery(
    [QUERY_KEY_RESTAURANT_DETAIL, router.query.id],
    () => getVendorsDetail({id: router.query.id as string}),
    {staleTime}
  );
  return <RestaurantDetailDataContext.Provider value={result}>{children}</RestaurantDetailDataContext.Provider>;
}

export default RestaurantDetailDataProvider;
