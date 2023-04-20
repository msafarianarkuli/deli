import React, {useEffect} from "react";
import RestaurantOrderPreviousCard from "view/restaurantOrderPrevious/component/restaurantOrderPreviousCard/RestaurantOrderPreviousCard";
import {useRestaurantOrderPreviousData} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousDataProvider";
import {
  setRestaurantOrderPreviousReceiptData,
  useRestaurantOrderPreviousReceiptAction,
} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousReceiptProvider";
import {useInView} from "react-intersection-observer";

function RestaurantOrderPreviousList() {
  const {data, isLoading} = useRestaurantOrderPreviousData();

  return (
    <div>
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.orders.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantOrderPreviousListShow />
    </div>
  );
}

function RestaurantOrderPreviousListShow() {
  const dispatch = useRestaurantOrderPreviousReceiptAction();
  const {data, fetchNextPage} = useRestaurantOrderPreviousData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages.map((value, index, array) => {
        return value.orders.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <div key={item.id} ref={tmpRef}>
              <RestaurantOrderPreviousCard
                key={item.id}
                id={item.id.toString()}
                title={item.vendor.name}
                receiptNumber={item.id}
                image={item.vendor.logo}
                deliveryTitle={item.address.title || ""}
                coin={15}
                status={item.orderstatus}
                date={item.created_at}
                orders={item.productKinds}
                hasRate
                totalPrice={Math.round(item.topayprice / 10)}
                onClickReceipt={() => {
                  dispatch(setRestaurantOrderPreviousReceiptData());
                }}
                onClickReOrder={() => {}}
              />
            </div>
          );
        });
      })}
    </>
  );
}

export default RestaurantOrderPreviousList;
