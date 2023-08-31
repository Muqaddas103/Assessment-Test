import { Link } from "react-router-dom";
import TableSort from "./tableSort";
import { DataTableViewProps } from "../../types/components";


function DataTableView({
  params,
  setParams,
  propertyPaginationList,
} : DataTableViewProps) {
  return (
    <>
      <div className="overflow-x-auto mx-6 my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-300 text-left text-md leading-4 font-medium text-gray-800 uppercase tracking-wider  w-[500px]">
                Title
              </th>
              <th className="px-6 py-3 bg-gray-300 text-left text-md leading-4 font-medium text-gray-800 uppercase tracking-wider   w-[500px]">
                Address
              </th>
              <th className="px-6 py-3 bg-gray-300 text-left text-md leading-4 font-medium text-gray-800 uppercase tracking-wider  w-[300px]">
                <TableSort
                  params={params}
                  setParams={setParams}
                  title="Price"
                />
              </th>
              <th className="px-6 py-3 bg-gray-300 text-left text-md leading-4 font-medium text-gray-800 uppercase tracking-wider   w-[300px]">
                <TableSort params={params} setParams={setParams} title="Beds" />
              </th>
              <th className="px-6 py-3 bg-gray-300 text-left text-md leading-4 font-medium text-gray-800 uppercase tracking-wider  w-[300px]">
                <TableSort params={params} setParams={setParams} title="Bath" />
              </th>
              <th className="px-6 py-3 bg-gray-300 text-left text-md leading-4 font-medium text-gray-800 uppercase tracking-wider  w-[300px]">
                View Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {propertyPaginationList.length > 0 ? (
              propertyPaginationList?.map((listing) => (
                <tr key={listing.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {listing.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {listing.address}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {listing.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {listing.beds}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {listing.bath}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap underline text-blue-500 ">
                    <Link to={`/property-detail/${listing.id}`}>
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center">
                  <p className="text-gray-500">No data found.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTableView;
