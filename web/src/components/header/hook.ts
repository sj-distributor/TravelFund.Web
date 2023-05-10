import { routerArray } from "../../router"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const useAction = () => {
  const [userName, setUserName] = useState<string>("")

  const [clickIndex, setClickIndex] = useState<number>(0)

  const [textColor, setTextColor] = useState<string>("text-gray-300")

  const [isClickAccount, setIsClickAccount] = useState<boolean>(false)

  const navigate = useNavigate()

  const pathName = useLocation().pathname

  const routerIndex = routerArray.findIndex((item) => {
    return item.path === "/home"
  })

  const homeChild = routerArray[routerIndex].children?.slice(1)

  useEffect(() => {
    setUserName("User.L")

    setTextColor("text-gray-300")

    let locationIndex: number = 0
    locationIndex = homeChild!.findIndex((e) => pathName.search(e.path) > -1)
    setClickIndex(locationIndex)
  }, [pathName])

  const clickMenu = (index: number) => {
    setClickIndex(index)
  }

  const clickAccount = () => {
    isClickAccount === true
      ? setTextColor("text-gray-300")
      : setTextColor("text-white font-medium")

    isClickAccount === true ? setIsClickAccount(false) : setIsClickAccount(true)
  }

  const loginOut = () => {
    navigate("/login")
  }

  return {
    userName,
    homeChild,
    clickIndex,
    clickMenu,
    textColor,
    clickAccount,
    isClickAccount,
    setIsClickAccount,
    loginOut,
  }
}
export default useAction
