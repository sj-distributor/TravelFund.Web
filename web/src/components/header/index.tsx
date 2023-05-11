import { Link } from "react-router-dom"
import { RoutesProps } from "@/props"
import useAction from "./hook"
import { Menu } from "antd"

const Header = () => {
  const {
    userName,
    routerArray,
    clickIndex,
    clickMenu,
    textColor,
    clickAccount,
    isClickAccount,
    auth,
  } = useAction()

  const AccountModal = () => {
    return (
      <div className="bg-white w-36 absolute right-5 rounded-b-md border border-gray-300 shadow-xl">
        <div className="h-8 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold">
          <div className="text-sm ml-5">账号设置</div>
        </div>
        <div
          className="h-8 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold"
          onClick={() => auth.signout()}
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
          你好，{userName}
        </div>
      </div>
      {isClickAccount === true && <AccountModal />}
      <Menu
        className="flex justify-around my-7"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        {routerArray.map((item: RoutesProps, index: number) => {
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
              >
                <div className="font-medium">{item.name}</div>
              </div>
            </Link>
          )
        })}
      </Menu>
      <div className="h-px bg-gray-300" />
      <div className="flex">
        <div className="w-32 bg-gray-500" />
      </div>
    </div>
  )
}
export default Header