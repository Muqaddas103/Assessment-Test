import { PaginationProps } from "../types/components";

function Pagination({
  _page,
  totalPages,
  onNextClick,
  onPrevClick,
  params,
  setParams,
}: PaginationProps) {
  const PAGE_SIZE_OPTIONS = [5, 10, 15, 20];
  return (
    <div className="flex flex-col items-center sm:flex-row justify-center mt-20 mb-6">
    <div className="flex items-center mb-4 sm:mb-0">
      <button
        onClick={onPrevClick}
        disabled={_page === 1}
        className={`px-4 py-2 font-medium rounded-md ${
          _page === 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
        }`}
      >
        Previous
      </button>
      <div className="mx-4 text-gray-600">
        Page {_page} of {totalPages}
      </div>
      <button
        onClick={onNextClick}
        disabled={_page === totalPages}
        className={`px-4 py-2 font-medium rounded-md ${
          _page === totalPages
            ? "bg-gray-300 text-gray-600"
            : "bg-blue-500 text-white"
        }`}
      >
        Next
      </button>
    </div>
    <div className="ml-0 mt-4 sm:ml-8 sm:mt-0">
      <label className="mr-2">Page size:</label>
      <select
        value={params._limit}
        onChange={(e: any) => {
          setParams((prevParams) => ({
            ...prevParams,
            _limit: e.target.value,
            _page:1,
          }));
        }}
        className="px-2 py-1 border rounded focus:outline-none text-sm sm:text-base"
      >
        {PAGE_SIZE_OPTIONS.map((pageSize) => (
          <option className="text-sm sm:text-base" key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  </div>
  
  );
}

export default Pagination;
