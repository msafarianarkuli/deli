import {useController, useFormContext} from "react-hook-form";
import classNames from "classnames";
import ReactSlider from "react-slider";
import styles from "view/vendorCategory/vendorCategory.module.scss";

function VendorCategoryFilterPrice() {
  const {control} = useFormContext();
  const {field} = useController({
    control,
    name: "price",
  });
  const container = classNames({
    [styles.vendor_category_filter_box]: true,
    "mt-3 px-5 py-2": true,
  });

  return (
    <div className={container}>
      <div>قیمت</div>
      <div className="my-4">
        <ReactSlider
          min={0}
          max={100}
          step={1}
          defaultValue={field.value}
          value={field.value}
          minDistance={13}
          pearling
          className="price_rate_slider"
          trackClassName="price_rate_track"
          renderThumb={(props) => {
            return (
              <div {...props}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
            );
          }}
          onChange={(value) => {
            field.onChange(value);
          }}
        />
        <div className="flex items-center justify-between mt-4 font-medium text-[11px]">
          <div>از 45,500 تومان</div>
          <div>تا 45,500 تومان</div>
        </div>
      </div>
    </div>
  );
}

export default VendorCategoryFilterPrice;
