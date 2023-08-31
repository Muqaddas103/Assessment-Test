import React from "react";
import { TableSortProps } from "../../types/components";

function TableSort({ title, params, setParams }: TableSortProps) {
  const handleSortClick = (column: string, direction: string) => {
    setParams({
      ...params,
      _sort: column,
      _order: direction
    });
  };

 const lowerCaseTitle = title.toLowerCase();
  return (
    <div className="flex items-center flex-row justify-between">
      {title}
      <div className="flex flex-col ml-5">
        <span
          className={`ml-1 cursor-pointer text-xs ${
            params._order === "asc" && params._sort === lowerCaseTitle? "text-blue-500" : ""
          }`}
          onClick={() => handleSortClick(lowerCaseTitle, "asc")}
          // disabled={params._order === "asc" && params._sort === lowerCaseTitle}
        >
          ▲
        </span>
        <span
          className={`ml-1 cursor-pointer text-xs ${
            params._order === "desc" && params._sort === lowerCaseTitle
              ? "text-blue-500"
              : ""
          }`}
          onClick={() => handleSortClick(lowerCaseTitle, "desc")}
          // disabled={params._order === "desc" && params._sort === title.toLowerCase()}
        >
          ▼
        </span>
      </div>
    </div>
  );
}

export default TableSort;
