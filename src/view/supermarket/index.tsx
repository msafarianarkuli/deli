import SupermarketHeader from "view/supermarket/component/SupermarketHeader";
import SupermarketSearch from "view/supermarket/component/SupermarketSearch";
import SupermarketSort from "view/supermarket/component/SupermarketSort";
import SupermarketList from "view/supermarket/component/SupermarketList";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";
import {BottomNavigation} from "components";

function SuperMarket() {
  const data = useSupermarketNavigation();
  return (
    <>
      <SupermarketHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SupermarketSearch />
        <SupermarketSort />
        <SupermarketList />
      </div>
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation primary="supermarket" data={data} />
    </>
  );
}

export default SuperMarket;