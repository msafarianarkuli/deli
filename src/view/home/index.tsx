import HomeHeader from "view/home/component/HomeHeader";
import HomeSearch from "view/home/component/HomeSearch";
import HomeCategory from "view/home/component/HomeCategory";
import HomeBest from "view/home/component/HomeBest";
import HomeGradient from "view/home/component/HomeGradient";
import HomeAdsSlider from "view/home/component/HomeAdsSlider";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSearch />
      <HomeCategory />
      <HomeAdsSlider />
      <HomeBest />
      <HomeGradient />
    </>
  );
}

export default Home;
