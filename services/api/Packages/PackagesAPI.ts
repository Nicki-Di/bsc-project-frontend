import axios from "axios";
import { baseRoute } from "@/utils/consts";

export default class PackagesAPI {
  static init() {
    let headers = {
      Accept: "application/json",
    };

    return axios.create({
      baseURL: baseRoute + "/packages",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getAll = async () => {
    return await this.init().get("/all");
  };
}
//    return await fetch(baseRoute + '/packages/all', { next: { revalidate: 10 } });