import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const useAction = () => {
  const [userName, setUserName] = useState<string>("")

  const [passWord, setPassWord] = useState<string>("")

  const [userNameInvalid, setUserInvalid] = useState<boolean>(false)

  const [passWordInvalid, setPassWordInvalid] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    setUserName("")
    setPassWord("")
  }, [])

  const clickLogin = () => {
    // 获取到账号密码
    console.log(userName, passWord)
    navigate("/home/invoice")
  }

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
