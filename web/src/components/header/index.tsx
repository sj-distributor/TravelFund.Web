import { Link } from "react-router-dom"
import { Children } from "@/props"
import useAction from "./hook"

const Header = () => {
  const {
    homeChild,
    clickIndex,
    clickMenu,
    textColor,
    clickAccount,
    isClickAccount,
    loginOut,
  } = useAction()

  const AccountModal = () => {
    return (
      <div className="bg-white w-36 absolute right-5 rounded-b-md border border-gray-300 shadow-xl">
        <div className="h-8 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold">
          <div className="text-sm ml-5">账号设置</div>
        </div>
        <div
          className="h-8 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold"
          onClick={loginOut}
        >
          <div className="text-sm ml-5">注销</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row-reverse items-center w-full h-12 bg-gray-600">
        <div
          className={`${textColor} mr-10 hover:text-white hover:font-medium text-sm cursor-pointer`}
          onClick={clickAccount}
        >
          你好，User.L
        </div>
      </div>
      {isClickAccount === true && <AccountModal></AccountModal>}
      <div className="flex justify-around my-7">
        {homeChild?.map((item: Children, index: number) => {
          return (
            <Link
              to={item.path}
              style={{ textDecoration: "none" }}
              onClick={() => clickMenu(index)}
            >
              <div
                className={`flex justify-center items-center w-24 h-12 border-2 rounded-[0.8rem] border-gray-600 hover:bg-gray-600 hover:text-white ${
                  clickIndex === index && "bg-gray-600 text-white"
                } cursor-pointer`}
                key={index}
              >
                <div className="font-medium">{item.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="h-px bg-gray-300"></div>
      <div className="flex">
        <div className="w-32 bg-gray-500"></div>
      </div>
    </div>
  )
}
export default Header
