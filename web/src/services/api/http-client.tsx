import { AppSettings } from "../../appsettings"

export async function Post<T>(url: string, data?: object) {
  return base<T>(url, "post", data)
}
export async function Get<T>(url: string) {
  return base<T>(url, "get")
}
export interface SmartFaqResponse<T> {
  code: number
  msg: string
  data: T
}
export enum ResponseCode {
  Ok = 200,
  Unauthorized = 401,
  InternalServerError = 500,
}

export interface IResponse<T> {
  code: ResponseCode
  msg: string
  data: T
}

export async function base<T>(
  url: string,
  method: "get" | "post",
  data?: object | FormData
) {
  const settings: AppSettings = (window as any).appSettings

  const headers: { Authorization: string; "Content-Type"?: string } = {
    Authorization:
      "Bearer " +
      (localStorage.getItem("token")
        ? (localStorage.getItem("token") as string)
        : ""),
  }
  const isFormData = data instanceof FormData
  if (!isFormData) headers["Content-Type"] = "application/json"
  const body = isFormData ? data : JSON.stringify(data)
  return await fetch(`${settings.serverUrl}${url}`, {
    method: method,
    body: body,
    headers: headers,
  })
    .then((res) => res.json())
    .then((res: IResponse<T>) => {
      if (res.code === ResponseCode.Ok) {
        return res.data
      } else if (res.code === ResponseCode.Unauthorized) {
        return null
      } else if (res.code === ResponseCode.InternalServerError) {
        return null
      } else {
        console.log("todo")
      }
    })
    .catch((err) => {
      console.log("request error:", err)
      throw new Error(err)
    })
}
