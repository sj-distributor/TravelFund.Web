import { Link, useNavigate } from "react-router-dom";
import { RoutesProps } from "@/props";
import useAction from "./hook";

const Header = () => {
  const {
    userName,
    routerArray,
    clickIndex,
    clickMenu,
    setIsClickAccount,
    isClickAccount,
    signout,
  } = useAction();

  const navigate = useNavigate();

  const AccountModal = () => {
    return (
      <div className="bg-white w-36 absolute top-12 right-12 rounded-b-md border border-gray-300 shadow-xl">
        <div className="h-8 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold">
          <div className="text-sm ml-5">账号设置</div>
        </div>
        <div
          className="h-8 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold"
          onClick={() => signout(() => navigate("/login"))}
        >
          <div className="text-sm ml-5">注销</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-row-reverse items-center w-full h-12 bg-gray-600 ">
        <div
          className="cursor-pointer h-12 w-32 mr-14 flex items-center justify-center hover:bg-gray-700"
          onMouseEnter={() => setIsClickAccount(true)}
          onMouseLeave={() => setIsClickAccount(false)}
        >
          <div className="text-gray-300 text-sm flex items-center">
            你好，{userName}
          </div>
          {isClickAccount === true && <AccountModal />}
        </div>
      </div>

      <div
        className="flex justify-around my-7"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        {routerArray.map((item: RoutesProps, index: number) => {
          return (
            <Link
              key={index}
              to={item.path}
              style={{ textDecoration: "none" }}
              onClick={() => clickMenu(index)}
              className="text-gray-600"
            >
              <div
                className={`flex justify-center items-center w-24 h-12 rounded-[0.8rem] border-gray-600 hover:bg-gray-600 hover:text-white ${
                  clickIndex === index && "bg-gray-600 text-white"
                } cursor-pointer border-solid border-2`}
              >
                <div className="font-medium">{item.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="h-px bg-gray-300" />
      <div className="flex">
        <div className="w-32 bg-gray-500" />
      </div>
    </div>
  );
};
export default Header;
