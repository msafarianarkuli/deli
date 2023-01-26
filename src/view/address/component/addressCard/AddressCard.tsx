import {Button} from "antd";
import {IconDeleteAddress, IconEditAddress} from "assets/icons";
import {useRouter} from "next/router";
import styles from "view/address/component/addressCard/addressCard.module.scss";
import {MouseEventHandler} from "react";

interface IAddressCard {
  title: string;
  address: string;
  onClickDelete: MouseEventHandler;
}

function AddressCard({title, address, onClickDelete}: IAddressCard) {
  const router = useRouter();
  return (
    <div className={styles.address_card_container}>
      <div className="text-[16px] font-semibold w-1/6 text-center">{title}</div>
      <div className="flex flex-1 text-[13px] font-light px-6">{address}</div>
      <div className="flex flex-col items-center justify-center">
        <Button onClick={onClickDelete} className="w-5 h-5 border-0 rounded-none p-0 shadow-none">
          <IconDeleteAddress className="w-5 h-5" />
        </Button>
        <Button
          onClick={() => router.push("/address/create")}
          className="w-4 h-4 border-0 rounded-none p-0 mt-4 shadow-none"
        >
          <IconEditAddress className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default AddressCard;
