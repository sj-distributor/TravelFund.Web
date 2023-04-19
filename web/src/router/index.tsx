import { Routes, Route } from "react-router-dom";
import { RouterType } from "../dtos/router";
import Examine from "../pages/examine-and-approve";
import Invoices from "../pages/invoices";
import Reimburse from "../pages/reimburse";
import ReportForms from "../pages/report-forms";
import Subscribe from "../pages/subscribe";

export const routerList: RouterType[] = [
  {
    path: "/invoices",
    name: "发票管理",
    element: <Invoices />,
  },
  {
    path: "/subscribe",
    name: "申请管理",
    element: <Subscribe />,
  },
  {
    path: "/reimburse",
    name: "报销管理",
    element: <Reimburse />,
  },
  {
    path: "/examine",
    name: "审批管理",
    element: <Examine />,
  },
  {
    path: "/reportForms",
    name: "报表管理",
    element: <ReportForms />,
  },
];

export const ShowRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Invoices />} />
      {routerList.map((item, index) => {
        return (
          <Route key={index} path={item.path} element={item.element}>
            {item.children?.map((cItem, cIndex) => {
              return (
                <Route key={cIndex} path={cItem.path} element={cItem.element} />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
};
