import {RestaurantOrderAppHeader} from "components";
import RestaurantOrderActiveCard from "view/restaurantOrderActive/component/restaurantOrderActiveCard/RestaurantOrderActiveCard";
import img from "assets/images/res-order-logo.png";

const arr = Array.from(new Array(10), () => ({
  title: "رستوران آریایی",
  address: "وردآورد",
  image: img.src,
  deliveryTitle: "دفتر",
  date: new Date().toISOString(),
  coin: 15,
  receiptNumber: 321,
  deliveryTime: "15:00",
}));

function RestaurantOrderActive() {
  return (
    <>
      <RestaurantOrderAppHeader active="active" />
      <div className="mt-headerNormal px-[10px]">
        {arr.map((item, index) => {
          return (
            <RestaurantOrderActiveCard
              key={index}
              title={item.title}
              address={item.address}
              image={item.image}
              deliveryTitle={item.deliveryTitle}
              date={item.date}
              coin={item.coin}
              receiptNumber={item.receiptNumber}
              deliveryTime={item.deliveryTime}
              onClickSubmit={() => {}}
            />
          );
        })}
      </div>
    </>
  );
}

export default RestaurantOrderActive;