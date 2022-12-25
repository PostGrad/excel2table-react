import { OutTable } from "react-excel-renderer";

const Table = ({ rows, cols }) => {
  return <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />;
};

export default Table;
