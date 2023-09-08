import { RoutesProps } from "../props";
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthStatus } from "../hooks/auth-status";

import Login from "../pages/login";
import Home from "../pages/home";
import Reimbursement from "../pages/reimbursement";
import Approve from "../pages/approve";
import Report from "../pages/report";

export const routerArray: RoutesProps[] = [
  // {
  //     path: "/home/invoice",
  //     element: <Invoice />,
  //     name: "发票管理",
  //     leftSideChildren: "发票列表",
  // },
  // {
  //     path: "/home/travelApplication",
  //     element: <TravelApplication />,
  //     name: "申请管理",
  //     leftSideChildren: "我的申请",
  // },
  {
    path: "/home/reimbursement",
    element: <Reimbursement />,
    name: "报销管理",
    leftSideChildren: "我的报销",
  },
  {
    path: "/home/approve",
    element: <Approve />,
    name: "审批管理",
    leftSideChildren: "申请列表",
  },
  {
    path: "/home/report",
    element: <Report />,
    name: "报表中心",
    leftSideChildren: "查看报表",
  },
];

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Home />}>
        <Route path="" element={<Navigate to={"/home/reimbursement"} />} />
        {routerArray.map((item: RoutesProps, index: number) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<AuthStatus>{item.element}</AuthStatus>}
            />
          );
        })}
      </Route>
    </Routes>
  );
};
