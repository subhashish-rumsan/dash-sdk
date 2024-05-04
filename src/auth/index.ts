import { Base } from "../base";
import { LoginCredentials, LoginResponse } from "./types";

const resourceName = "login";

export class Auth extends Base {
  clientLogin(credentials: LoginCredentials): Promise<LoginResponse> {
    return this.request(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }
}
