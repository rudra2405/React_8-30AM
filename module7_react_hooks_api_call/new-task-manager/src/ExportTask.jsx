import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export default function ExportTask({ apiData, fileName }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div>
      <button
        onClick={(e) => exportToCSV(apiData, fileName)}
        className="bg-red-600 text-white ms-55 float-end rounded-2xl p-2"
      >
        Export in CSV
      </button>
    </div>
  );
}
