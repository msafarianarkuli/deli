import RestaurantHeader from "view/restaurant/component/RestaurantHeader";
import RestaurantFilter from "view/restaurant/component/RestaurantFilter";
import RestaurantSort from "view/restaurant/component/RestaurantSort";
import RestaurantCard from "view/restaurant/component/restaurantCard/RestaurantCard";
import styles from "view/restaurant/restaurant.module.scss";
import img1 from "assets/images/res01.png";
import {BottomNavigation} from "components";
import Link from "next/link";
import BottomSheet from "components/customDrawer/BottomSheet";

const data = [
  {
    image: img1.src,
    title: "ساندویچ برگر 99",
    address: "خیابان ولی عصر",
    description: "فست فود برگر پیتزا ساندویچ",
    star: 4,
    coin: 15,
    time: 35,
  },
  {
    image: img1.src,
    title: "ساندویچ برگر 99",
    address: "خیابان ولی عصر",
    description: "فست فود برگر پیتزا ساندویچ",
    star: 4,
    coin: 15,
    time: 35,
  },
  {
    image: img1.src,
    title: "ساندویچ برگر 99",
    address: "خیابان ولی عصر",
    description: "فست فود برگر پیتزا ساندویچ",
    star: 4,
    coin: 15,
    time: 35,
  },
  {
    image: img1.src,
    title: "ساندویچ برگر 99",
    address: "خیابان ولی عصر",
    description: "فست فود برگر پیتزا ساندویچ",
    star: 4,
    coin: 15,
    time: 35,
  },
  {
    image: img1.src,
    title: "ساندویچ برگر 99",
    address: "خیابان ولی عصر",
    description: "فست فود برگر پیتزا ساندویچ",
    star: 4,
    coin: 15,
    time: 35,
  },
];

function Restaurant() {
  return (
    <>
      <div className={styles.restaurant_fixed_part}>
        <RestaurantHeader />
        <RestaurantFilter />
        <RestaurantSort />
      </div>
      <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px] pb-bottomNavigation">
        {data.map((item, index) => {
          return (
            <Link key={index} href="/restaurant/1">
              <RestaurantCard
                image={item.image}
                title={item.title}
                address={item.address}
                description={item.description}
                star={item.star}
                coin={item.coin}
                time={item.time}
              />
            </Link>
          );
        })}
      </div>
      <BottomSheet open title="انتخاب دسته بندی" height={300}></BottomSheet>
      <BottomNavigation />
    </>
  );
}

export default Restaurant;