import {useEffect, useState} from "react";
import {Checkbox, Map} from "components";
import styles from "view/orderComplete/component/orderCompleteAddressCard/orderCompleteAddressCard.module.scss";
import {IMapPoint} from "components/map/Map";
import useMapPin from "hooks/useMapPin";

interface IOrderCompleteAddressCard {
  id: string;
  value: boolean;
  onChange: () => void;
  point: IMapPoint;
  title: string;
  address: string;
}

const initialHeight = 60;
const mapHeight = 170;

function OrderCompleteAddressCard(props: IOrderCompleteAddressCard) {
  const {id, value, onChange, point, address, title} = props;
  const [height, setHeight] = useState(initialHeight);
  const pin = useMapPin();

  useEffect(() => {
    if (value) {
      setHeight(initialHeight + mapHeight);
    } else {
      setHeight(initialHeight);
    }
  }, [value]);

  return (
    <div className={styles.restaurant_complete_address_card} style={{height}}>
      {height > initialHeight ? (
        <div className="w-full overflow-hidden" style={{height: mapHeight}}>
          <Map
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            className="w-full h-full z-0"
            zoom={17}
            pinIcons={pin}
            points={[[point]]}
          />
        </div>
      ) : null}
      <div className="flex items-center" style={{height: initialHeight}}>
        <Checkbox
          classNameContainer="w-full h-full justify-end px-4 py-3"
          classNameLabel="flex flex-1 items-center mr-3"
          label={
            <>
              <div className="ml-5 text-[15px] font-semibold">{title}</div>
              <div className="flex">
                <div className="text-[13px]">{address}</div>
              </div>
            </>
          }
          id={id}
          type="radio"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default OrderCompleteAddressCard;
