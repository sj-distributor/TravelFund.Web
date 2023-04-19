import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import DataList from "../../components/data-list";
import useAction from "./hook";

const Invoices = () => {
  const { navigation, dataSource, columns } = useAction();
  const myDataTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">上传发票</div>
  );
  const allListTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">上传发票</div>
  );
  return (
    <DataList
      navigation={navigation}
      dataSource={dataSource}
      columns={columns}
      myDataTitle={myDataTitle}
      allListTitle={allListTitle}
    />
  );
};

export default Invoices;
