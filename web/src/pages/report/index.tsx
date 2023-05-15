import TableList from "./components/table-list"
import ExportFile from "../../components/export-file"
import useAction from "./hook"

import { DatePicker } from "antd"

const Report = () => {
  const { reportData, onChangeRangeDate } = useAction()

  const { RangePicker } = DatePicker

  return (
    <div className="w-full flex flex-1 flex-col bg-gray-200 overflow-hidden">
      <div className="flex items-center mx-3 mt-3">
        <div className="flex items-center ml-5">
          <div>日期筛选：</div>
          <RangePicker
            onCalendarChange={(val, date: string[], info) =>
              onChangeRangeDate(date)
            }
          />
        </div>
        <div
          className="flex justify-center items-center rounded-[0.5rem] w-24 h-10 bg-gray-600 cursor-pointer hover:bg-gray-700 ml-auto mr-5"
          onClick={() => ExportFile(reportData)}
        >
          <div className="text-white font-medium">导出报表</div>
        </div>
      </div>
      <TableList reportData={reportData} />
    </div>
  )
}
export default Report
