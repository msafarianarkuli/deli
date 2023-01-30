import styles from "view/home/home.module.scss";
import {IconRestaurant, IconSuperMarket} from "assets/icons";
import classNames from "classnames";
import Link from "next/link";

const cat = [
  {
    title: "رستوران",
    icon: IconRestaurant,
    link: "/restaurant",
  },
  {
    title: "سوپرمارکت",
    icon: IconSuperMarket,
    link: "/",
  },
];

function HomeCategory() {
  return (
    <div className="mx-[50px] my-[30px]">
      <div className="flex w-full">
        {cat.map((item, index) => {
          const container = classNames({
            [styles.home_category_box]: true,
            "ml-[15px] border-primary": index === 0,
            "border-[#066FAA]": index === 1,
          });
          const Icon = item.icon;
          return (
            <div key={index} className={container}>
              <Link href={item.link} className="absolute flex flex-col items-center justify-center w-full h-full">
                <Icon className="w-9 h-auto" />
                <div className="mt-1">{item.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeCategory;