import { ReactElement } from "react"

export interface ModalBoxProps {
  onCancel?: () => void
  children?: ReactElement
  header: ReactElement
  zIndex?: string
  isShowCancel?: boolean
}
