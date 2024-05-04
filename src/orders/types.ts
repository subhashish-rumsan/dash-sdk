export declare type Customer = {
  receiver_name: string;
  receiver_contact: string;
  receiver_alternate_number?: string;
  receiver_address: string;
  receiver_location_id: number;
  payment_type: string;
  product_name: string;
  client_note?: string;
  receiver_landmark?: string;
  order_reference_id?: string;
  product_price: string;
};

export declare type OrderReqBody = {
  customers: Customer[];
};

export declare type OrderResponse = {
  message: string;
};
