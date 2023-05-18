import { AppSettings } from "../../appsettings";

export async function Post<T>(url: string, data?: object) {
  return base<T>(url, "post", data);
}
export async function Get<T>(url: string) {
  return base<T>(url, "get");
}
export interface SmartFaqResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export interface IResponse<T> {
  code: 200;
  msg: string;
  data: T;
}

export async function base<T>(
  url: string,
  method: "get" | "post",
  data?: object | FormData
) {
  const settings: AppSettings = (window as any).appSettings;

  const headers: { Authorization: string; "Content-Type"?: string } = {
    Authorization:
      "Bearer " +
      (localStorage.getItem("token")
        ? (localStorage.getItem("token") as string)
        : ""),
  };
  const isFormData = data instanceof FormData;
  if (!isFormData) headers["Content-Type"] = "application/json";
  const body = isFormData ? data : JSON.stringify(data);
  return await fetch(`${settings.serverUrl}${url}`, {
    method: method,
    body: body,
    headers: headers,
  })
    .then((res) => {
      if (res.status === 401) {
        localStorage.setItem("token", "");

        return;
      }

      return res.json();
    })
    .then((res: IResponse<T>) => {
      if (res.code === 200) {
        return res.data;
      } else {
        throw new Error("request error");
      }
    });
}
