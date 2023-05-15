import { routerArray } from "../../router"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import useAuth from "../../hooks/use-auth"

const useAction = () => {
  const [userName, setUserName] = useState<string>("")

  const [clickIndex, setClickIndex] = useState<number>(0)

  const [textColor, setTextColor] = useState<string>("text-gray-300")

  const [isClickAccount, setIsClickAccount] = useState<boolean>(false)

  const pathName = useLocation().pathname

  const auth = useAuth()

  useEffect(() => {
    const storageUserName = localStorage.getItem("userName")
      ? (localStorage.getItem("userName") as string)
      : ""

    setUserName(storageUserName)

    setTextColor("text-gray-300")

    let locationIndex: number = 0
    locationIndex = routerArray.findIndex((e) => pathName.search(e.path) > -1)
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

  return {
    userName,
    routerArray,
    clickIndex,
    clickMenu,
    textColor,
    clickAccount,
    isClickAccount,
    setIsClickAccount,
    auth,
  }
}
export default useAction
