import { Button, Table } from "antd";
import { PropsType } from "../../../../dtos/data-list";

const AllList = (props: PropsType) => {
  const { dataSource, columns, allListTitle } = props;
  return (
    <>
      <div className="h-1/2 divide-y">
        {allListTitle}
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};

export default AllList;
