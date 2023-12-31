import {ReactNode} from "react";
import classNames from "classnames";

interface IVendorDetailRestaurantSummaryItem {
  top: ReactNode;
  bottom: ReactNode;
  classNameContainer?: string;
  classNameTop?: string;
  classNameBottom?: string;
}

function VendorDetailRestaurantSummaryItem(props: IVendorDetailRestaurantSummaryItem) {
  const {classNameContainer = "", classNameTop = "", classNameBottom = "", top, bottom} = props;

  const container = classNames({
    "relative flex flex-col items-center justify-center text-center": true,
    [classNameContainer]: classNameContainer,
  });

  const bottomClassName = classNames({
    "flex items-center text-iconColor text-[10px] font-medium": true,
    [classNameBottom]: classNameBottom,
  });

  const topClassName = classNames({
    "text-[13px] font-normal": true,
    [classNameTop]: classNameTop,
  });
  return (
    <div className={container}>
      <div className={topClassName}>{top}</div>
      <div className={bottomClassName}>{bottom}</div>
    </div>
  );
}

export default VendorDetailRestaurantSummaryItem;
