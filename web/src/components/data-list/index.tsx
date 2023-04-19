import { Link, Outlet } from "react-router-dom";
import { PropsType } from "../../dtos/data-list";
import AllList from "./components/all-list";
import MyData from "./components/my-data";
import useAction from "./hook";

const DataList = (props: PropsType) => {
  const { clickIndex, setClckIndex } = useAction();
  const { navigation, dataSource, columns, allListTitle, myDataTitle } = props;
  return (
    <div className="flex h-full divide-x">
      <div className="w-1/5 h-full text-center pt-10 flex flex-col">
        {navigation &&
          navigation.map((item, index) => {
            return (
              <div
                className={
                  clickIndex === index
                    ? "text-orange-600 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => setClckIndex(index)}
                key={index}
              >
                {item}
              </div>
            );
          })}
      </div>
      <div className="w-4/5 divide-y">
        {clickIndex ? (
          <AllList
            dataSource={dataSource}
            columns={columns}
            allListTitle={allListTitle}
          />
        ) : (
          <MyData myDataTitle={myDataTitle} />
        )}
      </div>
    </div>
  );
};
export default DataList;
