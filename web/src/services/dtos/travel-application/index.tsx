export interface ApplicationListProps {
  applyName: string
  travelDate: string
  isGroup: string
  returnDate: string
}

export interface TravelApplicationRequest {
  CustomPrice: number
  IsGroup: boolean
  TravelDate: string
  ReturnDate: string
}

export interface TravelApplicationResponses {
  id: number
  status: number
  userId: number
  customPrice: number
  invoicePrice: number
  actualPrice: number
  createdDate: string
  travelDate: string
  returnDate: string
  isGroup: boolean
}

export interface GetMediaType {
  PageIndex: number
  PageSize: number
}

export interface TravelApplicationList {
  count: number
  travelRequestForms: TravelApplicationResponses[]
}
