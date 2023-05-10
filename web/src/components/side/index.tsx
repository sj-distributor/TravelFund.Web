import { routerArray } from "../../router"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Side = () => {
  const pathName = useLocation().pathname

  const [leftSideChildren, setLeftSideChildren] = useState<string>("")

  const routerIndex = routerArray.findIndex((item) => {
    return item.path === "/home"
  })

  const homeChild = routerArray[routerIndex].children?.slice(1)

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
    </>
  )
}
export default Side
