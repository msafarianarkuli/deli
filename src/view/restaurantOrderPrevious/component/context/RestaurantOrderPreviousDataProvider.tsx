import React, {createContext, useContext} from "react";
import {IGetOrdersRes} from "api/getOrdersList";
import {UseInfiniteQueryResult} from "react-query";
import useOrderListResult from "hooks/useOrderListResult";

interface IRestaurantOrderPreviousDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetOrdersRes> = {};

const RestaurantOrderPreviousData = createContext<UseInfiniteQueryResult<IGetOrdersRes>>(initialState);

export const QUERY_KEY_RESTAURANT_ORDERS_PREVIOUS = "restaurantOrdersPrevious";

const staleTime = 10 * 60 * 1000;

function RestaurantOrderPreviousDataProvider({children}: IRestaurantOrderPreviousDataProvider) {
  const result = useOrderListResult({
    queryKey: QUERY_KEY_RESTAURANT_ORDERS_PREVIOUS,
    categoryId: 1,
    staleTime,
    statusId: [6, 7, 8],
  });

  return <RestaurantOrderPreviousData.Provider value={result}>{children}</RestaurantOrderPreviousData.Provider>;
}

export default RestaurantOrderPreviousDataProvider;

export function useRestaurantOrderPreviousData() {
  return useContext(RestaurantOrderPreviousData);
}
