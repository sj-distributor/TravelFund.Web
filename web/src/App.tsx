import React from "react";
import { routerList, ShowRoute } from "./router";
import { Link, useLocation } from "react-router-dom";

function App() {
  let routerUrl = useLocation().pathname;
  routerUrl === "/" && (routerUrl = "/invoices");
  return (
    <>
      <div className="border border-slate-200 hread flex items-center px-[1.5rem] flex-wrap justify-center">
        {routerList.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="mr-[1.5rem] mb-2">
              <div
                className={`px-6 py-3 border rounded-2xl ${
                  routerUrl === item.path && "border-orange-600 text-orange-600"
                }`}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="main border">
        <ShowRoute />
      </div>
    </>
  );
}

export default App;
