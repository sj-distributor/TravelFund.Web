import { RouterArray } from "../../router"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Side = () => {
  const pathName = useLocation().pathname

  const [leftSideChildren, setLeftSideChildren] = useState<string>("")

  const routerIndex = RouterArray.findIndex((item) => {
    return item.path === "/home"
  })

  const homeChild = RouterArray[routerIndex].children?.slice(1)

  useEffect(() => {
    let locationIndex: number = 0
    locationIndex = homeChild!.findIndex((e) => pathName.search(e.path) > -1)
    setLeftSideChildren(homeChild![locationIndex].leftSideChildren)
  }, [pathName])

  return (
    <>
      <div className="w-32 flex justify-center mt-8">
        <div className="cursor-pointer">{leftSideChildren}</div>
      </div>
      <div className="w-px bg-gray-300 ml-5"></div>
    </>
  )
}
export default Side
