import {IconCoin, IconRoundedLeft, IconStarFill} from "assets/icons";
import IconDelivery from "assets/icons/IconDelivery";

interface ISupermarketDetailTitle {
  image?: string;
  title: string;
  deliveryPrice: number;
  rate: string;
  coin: number;
}

function SupermarketDetailTitle(props: ISupermarketDetailTitle) {
  const {title, rate, image, deliveryPrice, coin} = props;
  return (
    <div className="flex pt-3">
      <img
        src={image}
        alt={title}
        className="w-[80px] h-[80px] rounded-full border border-primarySupermarket object-cover object-center"
      />
      <div className="flex flex-col justify-around flex-1 mr-2">
        <div className="flex items-center justify-between font-medium">
          <div className="text-[15px] ml-1">
            <span>{title}</span>
            {/*<span className="text-iconColor mr-1">({address})</span>*/}
          </div>
          <div className="flex items-center text-primarySupermarket whitespace-nowrap">
            <span className="text-[11px]">اطلاعات و نظرات</span>
            <IconRoundedLeft className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between font-medium">
          <div className="flex w-full min-[390px]:w-auto min-[390px]:my-0 mt-1 mb-2 items-center text-[11px]">
            <IconCoin className="w-4 h-4 ml-1" />
            <span>جایزه خرید</span>
            <span className="mx-1">{coin}</span>
            <span>سکه</span>
          </div>
          <div className="flex items-center">
            <div className="inner_box flex items-center text-[11px]">
              <IconDelivery className="w-3 h-auto" />
              <span className="mx-1">{deliveryPrice.toLocaleString("en-US")}</span>
              <span>تومان</span>
            </div>
            <div className="inner_box flex items-center mr-2">
              <span className="text-[13px] h-4">{rate}</span>
              <IconStarFill className="w-3 h-auto mr-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupermarketDetailTitle;
