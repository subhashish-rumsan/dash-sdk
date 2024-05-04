import { Base } from "../base";
import { LoginCredentials, LoginResponse } from "./types";

const resourceName = "login";

export class Posts extends Base {
  clientLogin(credentials: LoginCredentials): Promise<LoginResponse> {
    return this.request(`/${resourceName}`);
  }
}
