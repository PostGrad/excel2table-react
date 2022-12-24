import Table from "./Table";

const UploadPanel = () => {
  return (
    <div className="flex flex-col m-5 items-center">
      <div className="flex flex-row space-x-4 items-center mb-5">
        <label>Select file to upload: </label>
        <button type="button" className="default-btn">
          Browse
        </button>
      </div>

      <Table />
    </div>
  );
};

export default UploadPanel;
