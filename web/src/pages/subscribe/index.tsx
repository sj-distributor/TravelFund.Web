import { ReactNode } from "react";
import DataList from "../../components/data-list";
import useAction from "./hook";

const Subscribe = () => {
  const { navigation, dataSource, columns } = useAction();
  const myDataTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">新建申请</div>
  );
  const allListTitle: ReactNode = (
    <div className="h-1/5 flex items-center justify-end px-8">新建申请</div>
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
export default Subscribe;
