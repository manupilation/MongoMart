import User from "./User";

type product = {
  name: string,
  price: number,
  image: string,
  discountRate?: number,
}

export type MlProduct = {
  id: string;
  title: string;
  condition: "new" | "used" | "not_specified";
  thumbnail_id: string;
  catalog_product_id: string | null;
  listing_type_id: string;
  permalink: string;
  buying_mode: "buy_it_now" | "auction";
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: number | null;
  available_quantity: number;
  official_store_id: string | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  variation_filters: any[];
  shipping: {};
  stop_time: string;
  seller: {};
  attributes: any[];
  variations_data: {};
  installments: {};
  winner_item_id: string | null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  differential_pricing: {
    id: number;
  };
  inventory_id: string | null;
};

export type mlProductCategory = {
  id: string,
  name: string,
};

export type updateProduct = {
  id: string,
  body: product,
}

export type RequestWithBody = Request & {
  body?: any;
  params?: any;
  user?: User,
  headers: Headers & {authorization: string},
};

export type AcquiredProduct = {
  user: string,
  products: [
    id: string,
    name: string,
    quantity: number,
    price: string,
  ],
}

export default product;
