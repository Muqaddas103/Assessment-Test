import { useEffect, useState } from "react";
import { ListingParams, PropertyList } from "../api/apiTypes";
import { getPropertyListings } from "../api/mockApi";
import CardView from "../components/cardView/cardView";
import DataTableView from "../components/tableView/tableView";
import Pagination from "../components/pagination";
import TableSearch from "../components/tableView/tableSearch";
import TableFilters from "../components/tableView/tableFilters";

function Home() {
  const [viewType, setViewType] = useState<string>("card");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [propertyPaginationList, setPropertyPaginationList] = useState<
    PropertyList[]
  >([]);
  const [params, setParams] = useState<ListingParams>({
    _page: 1,
    _limit: 10,
    _sort: "",
    _order: "",
    title_like: "",
    price_gte: "",
    price_lte: "",
    bath: "",
    beds: "",
  });

  async function fetchSortedPaginatedListings() {
    const sortedPaginatedListings = await getPropertyListings(params);
    setPropertyPaginationList(sortedPaginatedListings?.data);
    const linkHeader = sortedPaginatedListings?.headers?.get("link");
    if (linkHeader) {
      const linkParts = linkHeader.split(",");
      const lastPageLink = linkParts.find((part: string) =>
        part.includes('rel="last"')
      );
      if (lastPageLink) {
        const pageParam = lastPageLink.match(/_page=(\d+)/);
        if (pageParam) {
          const total = parseInt(pageParam[1]);
          setTotalPages(total);
        }
      }
    } else {
      setTotalPages(1);
    }
  }
  const handlePrevClick = () => {
    if (params._page && params._page > 1) {
      setParams((prevParams: ListingParams) => ({
        ...prevParams,
        _page: prevParams._page -1,
      }));
    }
  };
  const handleNextClick = () => {
    if (params._page && params._page < totalPages) {
      setParams((prevParams) => ({
        ...prevParams,
        _page: prevParams._page +1,
      }));
    }
  };
  useEffect(() => {
    fetchSortedPaginatedListings();
  }, [params]);

  const headerImageUrl =
    "https://lh5.googleusercontent.com/-L8ezY19lr-I/VMmLgurB2wI/AAAAAAAABUk/XJG_308Yz_c/s1600/atlanta-luxury-homes-real-estate-and-properties.jpg";

  return (
    <div>
      <header className="relative h-[30rem] md:h-[25rem] overflow-hidden">
        <img
          src={headerImageUrl}
          alt="Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
          Discover Your Dream Home
        </div>
      </header>
      <div className="flex items-center justify-between mb-10 mx-6 my-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Available Properties
        </h1>
        <label className="flex items-center cursor-pointer text-lg">
          <span
            className={`mr-2 font-semibold ${
              viewType === "table" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Switch to {viewType === "card" ? "table" : "card"} view:
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              onChange={() =>
                setViewType(viewType === "card" ? "table" : "card")
              }
              checked={viewType === "table"}
            />
            <div
              className={`toggle__line w-[50px] h-[24px] rounded-full shadow-inner ${
                viewType === "table"
                  ? "bg-gray-200 left-[24px]"
                  : "bg-gray-400 left-0"
              }`}
            ></div>
            <div
              className={`toggle__dot absolute w-6 h-6 rounded-full shadow inset-y-0 ${
                viewType === "table"
                  ? "bg-blue-500 left-[24px]"
                  : "bg-white left-0"
              }`}
            ></div>
          </div>
        </label>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mx-6 my-6">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <TableSearch params={params} setParams={setParams} />
        </div>
        <div className="w-full sm:w-auto">
          <TableFilters
            fetchSortedPaginatedListings={fetchSortedPaginatedListings}
            params={params}
            setParams={setParams}
          />
        </div>
      </div>
      {viewType === "card" ? (
        <CardView propertyList={propertyPaginationList} />
      ) : (
        <DataTableView
          propertyPaginationList={propertyPaginationList}
          params={params}
          setParams={setParams}
        />
      )}
      <Pagination
        totalPages={totalPages}
        _page={params._page}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        params={params}
        setParams={setParams}
      />
    </div>
  );
}

export default Home;
