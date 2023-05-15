import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

import { Post } from "../../services/api/http-client"
import { useLocation } from "react-router-dom"

import useAuth from "../../hooks/use-auth"

const useAction = () => {
  const { signin } = useAuth()

  const [userName, setUserName] = useState<string>("admin")

  const [passWord, setPassWord] = useState<string>(
    "ece18047-239b-4309-b52d-472d9d2dfc15"
  )

  const [userNameInvalid, setUserInvalid] = useState<boolean>(false)

  const [passWordInvalid, setPassWordInvalid] = useState<boolean>(false)

  const navigate = useNavigate()

  const location = useLocation()

  const historyCallback = () => {
    let p = location.state as any
    p?.from?.pathname
      ? navigate(p.from.pathname, { replace: true })
      : navigate("/home/invoice")
  }

  const clickLogin = () => {
    Post<string>("/auth/login", {
      username: userName,
      password: passWord,
    }).then((token) => {
      if (token) {
        localStorage.setItem("token", token)
        localStorage.setItem("userName", userName)
        signin(token, historyCallback)
      }
    })
  }

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      signin(token, historyCallback)
    }
  }, [])

  const blurInput = (inputValue: string, type: string) => {
    type === "UserName" &&
      (inputValue === "" ? setUserInvalid(true) : setUserInvalid(false))

    type === "PassWord" &&
      (inputValue === "" ? setPassWordInvalid(true) : setPassWordInvalid(false))
  }

  return {
    clickLogin,
    userName,
    passWord,
    setUserName,
    setPassWord,
    userNameInvalid,
    passWordInvalid,
    setUserInvalid,
    setPassWordInvalid,
    blurInput,
  }
}
export default useAction
