import {
  TravelApplicationRequest,
  TravelApplicationResponses,
  GetMediaType,
  TravelApplicationList,
} from "../../dtos/travel-application"

import { Post, Get } from "../http-client"

export const PostAddTravelApplication = async (
  data: TravelApplicationRequest
) => {
  return await Post<TravelApplicationResponses>(
    `/api/TravelFund/request/form/add?CustomPrice=${data.CustomPrice}&IsGroup=${data.IsGroup}&TravelDate=${data.TravelDate}&ReturnDate=${data.ReturnDate}`
  )
}

export const GetTravelApplicationList = async (params: GetMediaType) => {
  return await Get<TravelApplicationList>(
    `/api/TravelFund/request/form/list?PageIndex=${params.PageIndex}&PageSize=${params.PageSize}`
  )
}
