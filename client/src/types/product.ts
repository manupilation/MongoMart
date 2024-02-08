export type newProduct = {
  name: string,
  price: number,
  image: string,
  discountRate?: number,
}

export type product = newProduct & {
  id: string,
  date: string,
};

export type UserProduct = {
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
  shipping: {
    "free_shipping": boolean,
  };
  stop_time: string;
  seller: {};
  attributes: any[];
  variations_data: {};
  installments: {
    "quantity": number | null,
    "amount": number | null,
    "rate": number | null,
  } | null;
  winner_item_id: string | null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  differential_pricing: {
    id: number;
  };
  inventory_id: string | null;
};

export type category = {
  name: string,
  id: string,
}

export type productToClean = newProduct & {
  price: { $numberDecimal: string },
  id: string,
  date: string
}
