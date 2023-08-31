import React from "react";
import { FaTimes } from "react-icons/fa";
import { TableSearchProps } from "../../types/components";

function TableSearch({ params, setParams }: TableSearchProps) {
  const handleSearchChange = (event: any) => {
    setParams((prevParams) => ({
      ...prevParams,
      title_like: event.target.value,
      _page: 1,
    }));
  };
  const handleClearSearch = () => {
    setParams((prevParams) => ({
      ...prevParams,
      title_like: "",
    }));
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded w-64 focus:outline-none"
          value={params.title_like}
          onChange={handleSearchChange}
        />
        {params.title_like && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none"
            onClick={handleClearSearch}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
}

export default TableSearch;
