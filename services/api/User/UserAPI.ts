import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { updateUserType } from "@/services/api/User/types";
import { parseCookie } from "@/services/api/functions";
import { cookieType } from "@/services/api/types";

export default class UserAPI {
  static init(cookies?: cookieType[]) {
    const headers = {
      Accept: "application/json",
      Cookie: parseCookie(cookies),
    };

    return axios.create({
      baseURL: baseRoute + "/users",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getUser = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/current");
  };

  static updateUser = async (data: updateUserType) => {
    return await this.init().put("/update", data);
  };
}
