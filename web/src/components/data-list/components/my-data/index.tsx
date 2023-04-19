import TextArea from "antd/es/input/TextArea";
import { PropsType } from "../../../../dtos/data-list";
import useAction from "./hook";

const MyData = (props: PropsType) => {
  const { fromData } = useAction();
  const { myDataTitle } = props;
  return (
    <>
      <div className="h-1/2 divide-y">
        <div className="h-1/5 flex items-center justify-end px-8">
          {myDataTitle}
        </div>
        {fromData.map((item, index) => {
          return (
            <div className="h-1/5 flex divide-x" key={index}>
              <div className="w-1/2 flex items-center px-8">{item.title}</div>
              <div className="w-1/2">
                <TextArea
                  style={{ height: "100%", resize: "none", border: "none" }}
                  placeholder="disable resize"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-1/2">
        <TextArea
          style={{ height: "100%", resize: "none", border: "none" }}
          placeholder="disable resize"
        />
      </div>
    </>
  );
};

export default MyData;
