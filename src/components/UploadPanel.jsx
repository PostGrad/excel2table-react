import { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import Table from "./Table";

const UploadPanel = () => {
  const [file, setFile] = useState([]);
  const [isXslx, setIsXslx] = useState(true);
  const [xcelData, setXcelData] = useState({});
  const handleBrowseClick = () => {
    setFile([]);
    setIsXslx(true);
  };
  const handleBrowseSubmit = (e) => {
    if (e.target.files[0].type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setIsXslx(false);
      return;
    }
    console.log("event : ", e.target.files[0]);
    setFile([e.target.files[0].name]);
    let fileObj = e.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Response of ExcelRenderer===>>>> ", resp);
        setXcelData({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };
  return (
    <div className="flex flex-col m-5 items-center">
      <div className="flex flex-row space-x-4 items-center mb-5">
        <label className="default-btn">
          Select file to upload
          <input id="file-upload" type="file" style={{ display: "none" }} onChange={(e) => handleBrowseSubmit(e)} onClick={handleBrowseClick} />
        </label>
        {file.length > 0 && <label>Selected file is: {file}</label>}
        {!isXslx && <label>Please select only .xslx file.</label>}
      </div>
      <div className="flex flex-row space-x-4 items-center mb-5">
        <button type="button" className="green-btn">
          Load Data
        </button>
      </div>
      {Object.keys(xcelData).length > 0 && <Table rows={xcelData.rows} cols={xcelData.cols} />}
    </div>
  );
};

export default UploadPanel;
