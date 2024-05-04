import { Base } from "../base";
import { OrderReqBody, OrderResponse } from "./types";

const resourceName = "clientOrder";

export class Orders extends Base {
  addOrders(credentials: OrderReqBody): Promise<OrderResponse> {
    return this.request(`/${resourceName}/add-order`, {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }
}
