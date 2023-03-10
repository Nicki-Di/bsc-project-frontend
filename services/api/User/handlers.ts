import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import UserAPI from "@/services/api/User/UserAPI";
import { updateUserType } from "@/services/api/User/types";
import { errorNotify, successNotify } from "@/Components/Notification/Toast";
import { translateErrors } from "@/utils/functions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toastRedirectTimeout } from "@/utils/consts";

export const getUser = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await UserAPI.getUser([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

export const updateUser = (updatedData: updateUserType, router: AppRouterInstance) => async () => {
  try {
    const data = (await UserAPI.updateUser(updatedData)).data;
    successNotify(data.message);
    setTimeout(() => {
      router.refresh();
    }, toastRedirectTimeout);
  } catch (error: any) {
    errorNotify(translateErrors(error));
  }
};
