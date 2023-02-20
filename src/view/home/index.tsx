import HomeHeader from "view/home/component/HomeHeader";
import HomeSearch from "view/home/component/HomeSearch";
import HomeCategory from "view/home/component/HomeCategory";
import HomeBest from "view/home/component/HomeBest";
import HomeAdsSwiper from "view/home/component/HomeAdsSwiper";
import HomeBottomNavigation from "view/home/component/HomeBottomNavigation";
import HomeAdsSwiper2 from "view/home/component/HomeAdsSwiper2";
import HomeDeliBlog from "view/home/component/HomeDeliBlog";
import HomeAdsSell from "view/home/component/HomeAdsSell";
import HomeCoin from "view/home/component/HomeCoin";
import HomeUp from "view/home/component/HomeUp";
import HomeOrder from "view/home/component/HomeOrder";
import {BottomPageGradient} from "components";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSearch />
      <HomeOrder />
      <HomeCategory />
      <HomeAdsSwiper />
      <HomeBest />
      <HomeDeliBlog />
      <HomeAdsSell />
      <HomeAdsSwiper2 />
      <HomeCoin />
      <HomeUp />
      <HomeBottomNavigation />
      <BottomPageGradient />
    </>
  );
}

export default Home;
