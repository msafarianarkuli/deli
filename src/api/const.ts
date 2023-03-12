export const API = {
  DOMAIN: process.env.DOMAIN_API,
  // auth
  SEND_CODE: "/api/users/send-code",
  REGISTER_ADDED_NAME: "/api/users/new-phone",
  UPDATE_USER_SESSION: "/api/auth/session",

  //get neshan address
  GET_ADDRESS: "https://api.neshan.org/v5/reverse",

  //vendors
  GET_VENDORS_CATEGORY: "/api/vendors/categories",
  GET_VENDORS_LIST: "/api/vendors/filter",
  GET_VENDOR_DETAIL: "/api/vendors/{id}",
  GET_VENDORS_TAGS: "/api/vendors/tags",
  GET_VENDOR_COMMENTS: "/api/vendors/{id}/comment",

  //supermarket
  GET_SUPERMARKET_MENU: "/api/market/{id}/menu",

  //user
  GET_USER_ADDRESSES: "/api/users/addresses",
  CREATE_USER_ADDRESS: "/api/users/addresses",
  UPDATE_USER_ADDRESS: "/api/users/addresses/{id}",
  DELETE_USER_ADDRESS: "/api/users/addresses/{id}",

  //orders
  GET_ORDERS_LIST: "/api/users/orders",
};
