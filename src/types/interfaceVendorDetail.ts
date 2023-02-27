export interface IGetVendorDetailRes {
  data: IGetVendorDetailData;
}

export interface IGetVendorDetailData {
  vendor: IGetVendorsDetailVendor;
  menus: IGetVendorDetailMenus;
  regions: IGetVendorDetailRegions[];
}

export interface IGetVendorsDetailVendor {
  id: number;
  name: string;
  address: string;
  status: number;
  open: number;
  about: string | null;
  min_cart: number;
  max_sendtime: string;
  open_hours: {
    sa: string;
    su: string;
    mo: string;
    tu: string;
    we: string;
    th: string;
    fr: string;
  };
  logo?: string | null;
  banner?: string | null;
  long: number;
  lat: number;
  category: string;
  rate: string;
  rates_count: number;
  last_comments: null;
  point: number;
  delivery_at_place: number;
  created_at: string;
  tags: {
    id: number;
    name: string;
    displayname: string;
    logo?: string | null;
  }[];
}

export interface IGetVendorDetailMenus {
  groups: IGetVendorDetailMenusGroups[];
}

export interface IGetVendorDetailMenusGroups {
  id: number;
  name: string;
  displayname: string;
  logo?: string | null;
  mothergroup_fid: number;
  products: IGetVendorDetailMenusGroupsProducts[];
}

export interface IGetVendorDetailMenusGroupsProducts {
  id: number;
  name: string;
  displayname: string;
  group_fid: number;
  unit_fid: number;
  description_te: string;
  price_class: number;
  productKinds: IGetVendorDetailMenusGroupsProductsProductKinds[];
  extras: IGetVendorDetailMenusGroupsProductsExtras[];
}

export interface IGetVendorDetailMenusGroupsProductsProductKinds {
  id: number;
  quality: number;
  price: number;
  photo_igu?: string | null;
  description: string;
}

export interface IGetVendorDetailMenusGroupsProductsExtras {
  id: number;
  name: string;
  price: number;
}

export interface IGetVendorDetailRegions {
  id: number;
  displayname: string;
}
