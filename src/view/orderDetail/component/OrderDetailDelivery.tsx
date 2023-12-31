import {useMemo} from "react";
import {Button} from "antd";
import {IconSupport} from "assets/icons";
import accept from "assets/images/pin-order-accept.svg";
import delivery from "assets/images/pin-order-delivery.svg";
import classNames from "classnames";
import useTypeColor from "hooks/useTypeColor";
import useOrderStatusText from "hooks/useOrderStatusText";
import {EOrderStatus} from "utils/Const";

interface IOrderDetailDelivery {
  deliveryTime: string;
  orderStatus: number;
}

function OrderDetailDelivery(props: IOrderDetailDelivery) {
  const {deliveryTime, orderStatus} = props;
  const typeColor = useTypeColor();
  const hintText = useOrderStatusText(orderStatus);

  const progressPercent = useMemo(() => {
    if (orderStatus === EOrderStatus.confirmed || orderStatus === EOrderStatus.ready) {
      return "50%";
    } else if (orderStatus === EOrderStatus.sent) {
      return "100%";
    }
    return "0";
  }, [orderStatus]);

  const progressIcon = useMemo(() => {
    if (orderStatus === EOrderStatus.confirmed || orderStatus === EOrderStatus.ready) {
      return (
        <img src={accept.src} alt="accept" className="absolute w-[19px] h-[28px] bottom-[2px] right-[calc(50%-9px)]" />
      );
    } else if (orderStatus === EOrderStatus.sent) {
      return <img src={delivery.src} alt="delivery" className="absolute w-[19px] h-[28px] bottom-[2px] -left-[9px]" />;
    }
    return null;
  }, [orderStatus]);

  const textClassName = classNames({
    "text-[15px] font-medium pl-1": true,
    "text-primary": typeColor === "default",
    "text-primarySupermarket": typeColor === "supermarket",
  });

  const processClassName = classNames({
    "absolute right-0 top-0 h-full rounded-full": true,
    "bg-primary": typeColor === "default",
    "bg-primarySupermarket": typeColor === "supermarket",
  });

  return (
    <div className="px-screenSpace mt-3">
      <div className="flex items-center justify-between">
        <div className={textClassName}>{hintText}</div>
        <div className="font-semibold whitespace-nowrap">
          <div className="text-[11px] mb-2">تحویل تا ساعت:</div>
          <div className="inner_box text-[13px] text-center">{deliveryTime}</div>
        </div>
      </div>
      <div className="mt-12 mb-9 mx-7">
        <div className="relative w-full h-[2px] bg-[#D9D9D9] rounded-full">
          <div className={processClassName} style={{width: progressPercent}} />
          {progressIcon}
        </div>
      </div>
      <a href="tel:02144987989">
        <Button
          icon={<IconSupport className="w-5 h-5 ml-1" />}
          className="flex items-center border-0 shadow-none bg-[rgba(44,48,54,0.04)] rounded-[5px] mr-auto"
        >
          تماس با پشتیبانی
        </Button>
      </a>
    </div>
  );
}

export default OrderDetailDelivery;
