import useAction from "./hook"
const Login = () => {
  const {
    clickLogin,
    userName,
    passWord,
    setUserName,
    setPassWord,
    userNameInvalid,
    passWordInvalid,
    blurInput,
  } = useAction()

  const userNameType = "UserName"
  const passWordType = "PassWord"

  const inputUserNameValue = userName
  const inputPassWordValue = passWord

  return (
    <div className=" bg-white w-full h-full absolute top-0 flex flex-col items-center">
      <div className="flex flex-row-reverse items-center w-full h-12 bg-gray-600"></div>
      <div className="flex flex-col justify-center max-w-2xl max-h-[50rem] w-3/5 h-2/4 bg-[#F7F7F8] rounded-[0.4rem] mt-36">
        <div className="mx-5">
          <div className="flex items-center justify-center">
            <div className="font-medium text-4xl tracking-wide mb-5">Login</div>
          </div>
          <div className="h-px bg-gray-300 "></div>
          <div className="flex flex-col justify-around h-36 mt-5 mb-5">
            <div>
              <input
                placeholder="Username"
                type="text"
                className="w-full h-10 border-gray-400 border rounded-[0.2rem] pl-3 "
                value={inputUserNameValue}
                onChange={(e) => setUserName(e.target.value)}
                onBlur={() => blurInput(inputUserNameValue, userNameType)}
              />
              {userNameInvalid === true && (
                <div className="text-red-600 italic text-sm ">
                  Username is required!
                </div>
              )}
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                className="w-full h-10 border-gray-400 border rounded-[0.2rem] pl-3"
                value={inputPassWordValue}
                onChange={(e) => setPassWord(e.target.value)}
                onBlur={() => blurInput(inputPassWordValue, passWordType)}
              />
              {passWordInvalid === true && (
                <div className="text-red-600 italic text-sm ">
                  Password is required!
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row-reverse mb-5">
            <div className="text-gray-500 hover:text-blue-900 cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div
              className="flex items-center justify-center w-44 h-11 bg-gray-600 hover:bg-gray-700 cursor-pointer rounded-[0.4rem]"
              onClick={clickLogin}
            >
              <div className="text-gray-50 font-bold">LOGIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
