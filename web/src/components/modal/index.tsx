import { CloseOutlined } from "@ant-design/icons"
import {
  FC,
  forwardRef,
  memo,
  RefAttributes,
  useImperativeHandle,
  useState,
} from "react"

import { ModalBoxProps } from "./props"

export const ModalBox: FC<ModalBoxProps & RefAttributes<unknown>> = memo(
  forwardRef(
    (
      {
        onCancel,
        header,
        children,
        zIndex = "50",
        isShowCancel = false,
      }: ModalBoxProps,
      ref
    ) => {
      const [visible, setVisible] = useState<boolean>(false)

      const open = () => {
        setVisible(true)
      }

      const close = () => {
        setVisible(false)
        onCancel && onCancel()
      }

      useImperativeHandle(ref, () => ({
        open,
        close,
      }))

      return (
        <div>
          {visible && (
            <div
              className="w-full h-full absolute inset-0 flex items-center justify-center bg-zinc-300/50"
              style={{ zIndex: zIndex }}
            >
              <div className="flex flex-col max-w-4xl max-h-[50rem] bg-white rounded-[0.4rem]">
                <div className="flex w-full py-1.5 px-2 items-center rounded-t-md relative font-semibold bg-gray-700 text-white">
                  {header}
                  {isShowCancel && (
                    <div className="cursor-pointer absolute right-0 flex items-center justify-center">
                      <CloseOutlined
                        className="pr-2 text-xl text-white hover:text-slate-300"
                        onClick={close}
                      />
                    </div>
                  )}
                </div>
                <div>{children}</div>
              </div>
            </div>
          )}
        </div>
      )
    }
  )
)

ModalBox.displayName = "ModalBox"
