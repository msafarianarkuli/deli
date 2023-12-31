import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "redux/store";
import {
  ICartReducer,
  ICartReducerListItem,
  IRemoveCartReducerCartListOrder,
  IRemoveCartReducerCartListOrderExtra,
  IRemoveCartReducerLastItem,
  ISetCartReducerItem,
  ISetCartReducerReorder,
  ISetCartReducerVendorData,
} from "types/interfaceCartReducer";
import {findOrderIndex} from "utils/cartReducerUtils";
import {HYDRATE} from "next-redux-wrapper";
import {IGetOrdersListResOrdersItemsProductKindsItems} from "types/interfaceOdrdersList";

const initialCartOrder: ICartReducerListItem = {
  vendorAddressName: "",
  vendorId: null,
  title: null,
  cartOrders: {},
  totalPrice: 0,
  totalOrderCount: 0,
  totalPoint: 0,
};

const initialState: ICartReducer = {
  cartList: [],
  isLoadedFromStorage: false,
};

export const CartRestaurantListLocalStorageKey = "cartListRestaurant";

const cartRestaurantReducer = createSlice({
  name: "cartRestaurant",
  initialState,
  reducers: {
    setCartRestaurantVendorData: (state, action: PayloadAction<ISetCartReducerVendorData>) => {
      state.cartList.push({
        ...initialCartOrder,
        vendorAddressName: action.payload.vendorAddressName,
        vendorId: action.payload.vendorId,
        title: action.payload.title,
        totalPoint: action.payload.point || 0,
      });
    },
    setCartRestaurantItem: (state, action: PayloadAction<ISetCartReducerItem>) => {
      const cartList = state.cartList;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      if (vendor) {
        const cartItem = vendor.cartOrders;
        const payload = action.payload;
        const extra = payload.extra || [];
        const totalExtraPrice = extra?.reduce((arr, current) => arr + current.price, 0);
        const price = payload.price;
        const title = payload.title;
        const point = payload.point || 0;
        const image = payload.image;
        if (cartItem[payload.id]) {
          cartItem[payload.id].push({extra, price, title, point, image});
        } else {
          cartItem[payload.id] = [{extra, price, title, point, image}];
        }
        vendor.totalOrderCount += 1;
        vendor.totalPoint += point;
        vendor.totalPrice += price + totalExtraPrice;
      }
    },
    removeCartRestaurantCartListLastOrder: (state, action: PayloadAction<IRemoveCartReducerLastItem>) => {
      const cartList = state.cartList;
      const id = action.payload.id;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      if (vendor) {
        const cartOrders = vendor.cartOrders;
        const item = cartOrders[id];
        if (item?.length) {
          const lastItem = item[cartOrders[id].length - 1];
          const totalExtraPrice = lastItem.extra?.reduce((arr, current) => arr + current.price, 0) || 0;
          const price = lastItem.price;
          const point = lastItem.point;
          item.pop();
          if (item?.length === 0) {
            delete cartOrders[id];
          }
          vendor.cartOrders = cartOrders;
          vendor.totalOrderCount -= 1;
          vendor.totalPoint -= point;
          vendor.totalPrice -= price + totalExtraPrice;
        }
      }
    },
    removeCartRestaurantCartListOrder: (state, action: PayloadAction<IRemoveCartReducerCartListOrder>) => {
      const cartList = state.cartList;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      const productId = action.payload.productId;
      const order = action.payload.order;
      const index = findOrderIndex({order, productId, cartOrders: vendor?.cartOrders});
      if (index !== -1 && vendor?.cartOrders) {
        const orders = vendor.cartOrders[productId];
        const totalExtraPrice = orders[index].extra?.reduce((arr, current) => arr + current.price, 0) || 0;
        const price = orders[index].price;
        const point = orders[index].point;
        orders.splice(index, 1);
        vendor.totalOrderCount -= 1;
        vendor.totalPoint -= point;
        vendor.totalPrice -= price + totalExtraPrice;
      }
    },
    removeCartRestaurantCartListOrderExtra: (state, action: PayloadAction<IRemoveCartReducerCartListOrderExtra>) => {
      const cartList = state.cartList;
      const vendor = cartList.find((item) => item.vendorId === action.payload.vendorId);
      const productId = action.payload.productId;
      const extraId = action.payload.extraId;
      const order = action.payload.order;
      const index = findOrderIndex({order, productId, cartOrders: vendor?.cartOrders});
      if (index !== -1 && vendor?.cartOrders) {
        const orders = vendor.cartOrders[productId];
        const tempOrder = orders[index];
        if (tempOrder.extra?.length) {
          const extraItem = tempOrder.extra.find((el) => el.id === extraId);
          if (extraItem) {
            vendor.totalPrice -= extraItem.price;
          }
          tempOrder.extra = tempOrder.extra.filter((el) => el.id !== extraId);
        }
      }
    },
    clearCartRestaurantCartList: (state) => {
      state.cartList = [];
    },
    removeCartRestaurantCartListCartOrder: (state, action: PayloadAction<string>) => {
      const cartList = state.cartList;
      const id = action.payload;
      if (cartList.some((item) => item.vendorId === id)) {
        state.cartList = cartList.filter((item) => item.vendorId !== action.payload);
      }
    },
    setCartRestaurantFromStorage: (state, action: PayloadAction<Omit<ICartReducer, "isLoadedFromStorage">>) => {
      state.cartList = action.payload?.cartList || [];
      state.isLoadedFromStorage = true;
    },
    setCartRestaurantReorder: (state, action: PayloadAction<ISetCartReducerReorder>) => {
      state.cartList = state.cartList.filter((item) => item.vendorId !== action.payload.vendorId);
      const order: ICartReducerListItem = {
        cartOrders: {},
        vendorAddressName: action.payload.vendorAddressName,
        vendorId: action.payload.vendorId,
        title: action.payload.title,
        totalPoint: action.payload.point || 0,
        totalOrderCount: 0,
        totalPrice: 0,
      };
      action.payload.productKinds.forEach((item) => {
        if (!order.cartOrders.hasOwnProperty(item.id)) {
          order.cartOrders[item.id] = [];
        }
        if (item.count_num > 1) {
          Array.from(new Array(item.count_num), (_, i) => i + 1).forEach(() => {
            reorderAddedItem(order, item);
          });
        } else {
          reorderAddedItem(order, item);
        }
      });
      state.cartList.push(order);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cartRestaurant,
      };
    },
  },
});

function reorderAddedItem(order: ICartReducerListItem, item: IGetOrdersListResOrdersItemsProductKindsItems) {
  const extra = typeof item.extra === "object" ? Object.values(item.extra) : [];
  order.cartOrders[item.id]?.push({
    image: item.photo_igu,
    point: 0,
    extra,
    price: item.price_prc,
    title: item.product.displayname,
  });
  const totalPrice = item.price_prc + extra.reduce((arr, current) => arr + current.price, 0);
  order.totalOrderCount += 1;
  order.totalPoint += 0;
  order.totalPrice += totalPrice;
}

const {reducer, actions} = cartRestaurantReducer;

export const {
  setCartRestaurantVendorData,
  setCartRestaurantItem,
  removeCartRestaurantCartListLastOrder,
  setCartRestaurantFromStorage,
  clearCartRestaurantCartList,
  removeCartRestaurantCartListCartOrder,
  removeCartRestaurantCartListOrder,
  removeCartRestaurantCartListOrderExtra,
  setCartRestaurantReorder,
} = actions;
export const selectCartRestaurant = (state: RootState) => state.cartRestaurant;
export const selectCartRestaurantList = (state: RootState) => state.cartRestaurant.cartList;

export default reducer;
