import RestaurantHeader from "view/restaurant/component/RestaurantHeader";
import RestaurantFilter from "view/restaurant/component/RestaurantFilter";
import RestaurantSort from "view/restaurant/component/RestaurantSort";
import {BottomNavigation} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";
import RestaurantList from "view/restaurant/component/RestaurantList";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import useRedirectToMap from "hooks/useRedirectToMap";

function Restaurant() {
  const data = useRestaurantNavigation();
  const {location, userAddress} = useSelector(selectAddressMap);
  useRedirectToMap();

  if (!location?.lat && !location?.lng && !userAddress?.latitude && !userAddress?.longitude) return null;
  return (
    <>
      <div className="fixed z-10 top-0 right-0 left-0 header_background">
        <RestaurantHeader />
        <RestaurantFilter />
        <RestaurantSort />
      </div>
      <RestaurantList />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation data={data} />
    </>
  );
}

export default Restaurant;
