import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { TableFiltersProps } from "../../types/components";

export default function TableFilters({ params, setParams }: TableFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement | null>(null);
  const filterDropdownRef = useRef<HTMLDivElement | null>(null);

  interface FilterValues {
    price_gte: string;
    price_lte: string;
    bath: string;
    beds: string;
  }

  const [filterValue, setFilterValue] = useState<FilterValues>({
    price_gte: '',
    price_lte: '',
    bath: '',
    beds: '',
  });

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        filterButtonRef.current &&
        !filterButtonRef.current?.contains(event.target) &&
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFilterChange = (field: any, value: string) => {
    setFilterValue((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className="mb-4 relative">
      <button
        ref={filterButtonRef}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={() => setShowFilters(!showFilters)}
      >
        <div className="flex items-center">
          {" "}
          Filters
          <FaFilter className="ml-2" />{" "}
        </div>
      </button>
      {params.price_gte || params.price_lte || params.bath || params.beds ? (
        <button
          onClick={() => {
            setParams({
              ...params,
              price_gte: "",
              price_lte: "",
              bath: "",
              beds: "",
            });
          }}
          className="ml-4 px-4 py-2 bg-gray-500 text-white rounded focus:outline-none"
        >
          Clear Filters
        </button>
      ) : null}
      {showFilters && (
        <div
          ref={filterDropdownRef}
          className="mt-4 w-full sm:w-[315px] bg-white p-4 rounded border shadow-lg absolute z-20"
        >
          <div className="flex flex-col justify-between mb-2">
            <label className="text-gray-800 font-semibold">Price:</label>
            <div className="flex space-x-2 sm:space-x-4">
              <input
                type="number"
                className="px-2 py-1 border rounded focus:outline-none w-full sm:w-1/2"
                placeholder="Min"
                min={1}
                value={filterValue.price_gte}
                onChange={(e) =>
                  handleFilterChange("price_gte", e.target.value)
                }
              />
              <input
                type="number"
                className="px-2 py-1 border rounded focus:outline-none w-full sm:w-1/2"
                placeholder="Max"
                min={1}
                value={filterValue.price_lte}
                onChange={(e) =>
                  handleFilterChange("price_lte", e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex flex-col justify-between mb-2">
            <label className="text-gray-800 font-semibold">Baths:</label>
            <input
              type="number"
              className="px-2 py-1 border rounded focus:outline-none"
              value={filterValue.bath}
              min={1}
              onChange={(e) => handleFilterChange("bath", e.target.value)}
            />
          </div>

          <div className="flex flex-col justify-between ">
            <label className="text-gray-800 font-semibold">Beds:</label>
            <input
              type="number"
              className="px-2 py-1 border rounded focus:outline-none"
              value={filterValue.beds}
              min={1}
              onChange={(e) => handleFilterChange("beds", e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className={`px-4 py-2 text-gray-800 hover:text-gray-700 focus:outline-none ${
                !filterValue.price_gte &&
                !filterValue.price_lte &&
                !filterValue.bath &&
                !filterValue.beds
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => {
                setFilterValue({
                  price_gte: "",
                  price_lte: "",
                  bath: "",
                  beds: "",
                });
              }}
              disabled={
                !filterValue.price_gte &&
                !filterValue.price_lte &&
                !filterValue.bath &&
                !filterValue.beds
              }
            >
              Clear
            </button>
            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mr-2 ${
                !filterValue.price_gte &&
                !filterValue.price_lte &&
                !filterValue.bath &&
                !filterValue.beds
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => {
                setParams({
                  ...params,
                  price_gte: filterValue.price_gte,
                  price_lte: filterValue.price_lte,
                  bath: filterValue.bath,
                  beds: filterValue.beds,
                });
                setShowFilters(false);
                setFilterValue({
                  price_gte: "",
                  price_lte: "",
                  bath: "",
                  beds: "",
                });
              }}
              disabled={
                !filterValue.price_gte &&
                !filterValue.price_lte &&
                !filterValue.bath &&
                !filterValue.beds
              }
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
