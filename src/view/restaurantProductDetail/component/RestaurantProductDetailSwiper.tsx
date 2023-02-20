import React from "react";
import img from "assets/images/product-detail.png";
import {ProductDetailSwiper} from "components";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";

const data: TDataCustomSwiper = [
  {
    title: 1,
    image: img.src,
  },
  {
    title: 2,
    image: img.src,
  },
  {
    title: 3,
    image: img.src,
  },
  {
    title: 4,
    image: img.src,
  },
];

function RestaurantProductDetailSwiper() {
  return <ProductDetailSwiper data={data} />;
}

export default RestaurantProductDetailSwiper;
