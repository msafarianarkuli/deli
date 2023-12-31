import React, {MouseEventHandler, useMemo} from "react";
import {TGetOrdersListResOrdersItemsProductKinds} from "types/interfaceOdrdersList";
import {EOrderStatus, OrderStatus} from "utils/Const";
import classNames from "classnames";
import {number2Digits} from "utils/utils";
import dayjs from "dayjs";
import {IconCoin, IconRoundedLeft} from "assets/icons";
import Link from "next/link";
import {Button} from "antd";
import jalaliday from "jalaliday";
import styles from "components/orderPrevious/component/orderPreviousCard/orderPreviousCard.module.scss";

dayjs.extend(jalaliday);

interface IOrderPreviousCard {
  id: string;
  receiptNumber: number;
  date: string;
  image?: string;
  title: string;
  deliveryTitle: string;
  orderStatus: number;
  orders: TGetOrdersListResOrdersItemsProductKinds;
  onClickReOrder: MouseEventHandler;
  onClickReceipt: MouseEventHandler;
  coin: number;
  totalPrice: number;
  hasRated: boolean;
  color: "default" | "supermarket";
}

function OrderPreviousCard(props: IOrderPreviousCard) {
  const {
    onClickReOrder,
    orders,
    onClickReceipt,
    receiptNumber,
    image,
    orderStatus,
    title,
    deliveryTitle,
    coin,
    date,
    id,
    totalPrice,
    hasRated,
    color,
  } = props;

  const status = useMemo(() => {
    const tmpStatus = OrderStatus.find((item) => item.id === orderStatus);
    return tmpStatus?.title || "";
  }, [orderStatus]);

  const statusClassName = classNames({
    "inner_box text-[13px] font-semibold": true,
    "text-primary": orderStatus === EOrderStatus.delivered && color === "default",
    "text-primarySupermarket": orderStatus === EOrderStatus.delivered && color === "supermarket",
    "text-textColorLight": orderStatus !== EOrderStatus.delivered,
  });

  const submitBtnClassName = classNames({
    "submit-btn": color === "default",
    "submit-btn-supermarket": color === "supermarket",
    "modal-submit-btn w-full h-[40px] font-medium text-[17px] rounded-[4px] ml-3": true,
  });

  const href = useMemo(() => {
    if (color === "supermarket") {
      return `/order/rate/${id}` + "?supermarket=1";
    }
    return `/order/rate/${id}`;
  }, [color, id]);

  return (
    <div className={styles.order_previous_card_container}>
      <div className="flex flex-wrap items-center justify-between px-[29px] pb-[19px] border-b border-borderColor">
        <div className="text-[15px] font-bold whitespace-nowrap">شماره فاکتور:{receiptNumber}</div>
        <div className="flex items-center text-[12px] font-medium">
          <div className="ml-2 whitespace-nowrap">
            {number2Digits(dayjs(date).hour())}:{number2Digits(dayjs(date).minute())}
          </div>
          <div className="whitespace-nowrap">{dayjs(date).calendar("jalali").locale("fa").format("dddd DD MMMM")}</div>
        </div>
      </div>
      <div className="px-[24px] py-[19px] border-b border-borderColor">
        <div className="flex">
          <img src={image} alt={title} className={styles.order_previous_card_image} />
          <div className="flex flex-col flex-1 mr-3">
            <div className="text-[17px] font-medium">
              <span className="ml-1">{title}</span>
              {/*<span className="text-textColorLight">({address})</span>*/}
            </div>
            <div className="flex flex-1 items-center justify-between mt-[17px]">
              <div className="text-[15px] font-medium text-textColorLight">ارسال به: {deliveryTitle}</div>
              <div className={statusClassName}>{status}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center overflow-auto py-5 mt-4 mb-7">
          {orders.map((item, index) => {
            return (
              <div key={index} className="ml-3">
                <div className="relative">
                  <img
                    src={item.photo_igu}
                    alt={item.product.displayname}
                    className={styles.order_previous_card_order_list_image}
                  />
                  {item.count_num > 1 ? (
                    <div className="absolute flex items-center justify-center top-0 left-0 w-5 h-5 rounded-full bg-iconColor">
                      <div className="font-medium text-[11px] text-white h-3">{item.count_num}</div>
                    </div>
                  ) : null}
                </div>
                <div className="text-[11px] font-medium text-textColorLight text-center mt-1">
                  {Math.round(item.price_prc / 10).toLocaleString("en-US")}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[15px]">
            <span>مجموع:</span>
            <span className="mx-1 font-bold">{totalPrice.toLocaleString("en-US")}</span>
            <span className="text-[13px] text-textColorLight">تومان</span>
          </div>
          {orderStatus === EOrderStatus.delivered ? (
            <div className="flex items-center text-[17px]">
              <IconCoin className="w-5 h-5 ml-1" />
              <span>{coin}</span>
              <span>+</span>
            </div>
          ) : null}
        </div>
      </div>
      {orderStatus === EOrderStatus.delivered && !hasRated ? (
        <Link href={href} className="flex items-center justify-end py-3 px-[24px] border-b border-borderColor">
          <div className="text-[15px]">به سفارش خود امتیاز دهید</div>
          <IconRoundedLeft className="w-5 h-5 mr-1" />
        </Link>
      ) : null}
      <div className="flex items-center mt-5 mx-[27px]">
        <Button
          disabled={orderStatus !== EOrderStatus.delivered}
          type="primary"
          className={submitBtnClassName}
          onClick={onClickReOrder}
        >
          سفارش مجدد
        </Button>
        <Button
          disabled={orderStatus !== EOrderStatus.delivered}
          className="secondary-btn w-full h-[40px] text-[17px] font-medium rounded-[4px]"
          onClick={onClickReceipt}
        >
          مشاهده فاکتور
        </Button>
      </div>
    </div>
  );
}

export default OrderPreviousCard;
