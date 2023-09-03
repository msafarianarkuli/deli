import styles from "view/home/home.module.scss";
import IconPhone from "assets/icons/IconPhone";
import Link from "next/link";
import {addComma} from "utils/utils";

interface IAdvertisementInfo {
  title: string;
  price: string;
  status: string;
  description: string;
  contact: string;
}

const AdvertisementInfo = (props: IAdvertisementInfo) => {
  const {title, price, status, description, contact} = props;
  return (
    <div className="px-[25px]">
      <div className="mb-4 text-[13px]">
        <div className={`${styles.home_other_category_box} p-6 rounded-[50px]`}>
          <span className="font-[500]">{title}</span>
        </div>
      </div>
      <div className="mb-4 text-[13px]">
        <div className={`${styles.home_other_category_box} p-6 rounded-[50px]`}>
          <span className="font-[500]">قیمت: </span>
          <span>
            {!price ? "توافقی" : addComma(price?.toString().slice(0, -1))} {!price ? "" : "تومان"}
          </span>
        </div>
      </div>
      <div className="mb-4 text-[13px]">
        <div className={`${styles.home_other_category_box} p-6 rounded-[50px]`}>
          <span className="font-[500]">وضعیت: </span>
          <span>{status}</span>
        </div>
      </div>
      <span className="text-[#575F6B] text-[15px]">توضیحات کامل:</span>
      <div className="inner_box text-[12px] my-4 px-4 py-3 rounded-[10px] text-black font-[400]">{description}</div>
      <div className="flex items-center gap-4">
        <Link href={`tel:${contact}`} className="w-1/4">
          <div className={`${styles.home_other_category_box} rounded-[10px] flex justify-center items-center py-3`}>
            <span className="font-[500] text-[15px] text-[#575F6B]">تماس</span>
          </div>
        </Link>

        <div className="flex justify-between items-center inner_box text-[14px] my-4 text-black w-3/4">
          <div className="text-center w-[100%]">
            <span className="font-[500] text-[15px] text-[#575F6B]">{contact}</span>
          </div>
          <IconPhone className="w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementInfo;