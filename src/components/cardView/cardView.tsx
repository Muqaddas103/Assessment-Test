import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardViewProps } from '../../types/components';


function CardView({propertyList}: CardViewProps) {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 my-6" >
    {propertyList?.map((listing) => (
      <div
        key={listing.id}
        onClick={()=> navigate(`/property-detail/${listing.id}`)}
        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
      >
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
        <p className="text-gray-600 mb-2">{listing.address}</p>
        <div className="flex justify-between">
          <p className="text-blue-500 font-medium">{listing.price}</p>
          <p className="text-gray-500">
            {listing.beds} Beds &#8226; {listing.bath} Bath
          </p>
        </div>
      </div>
    ))}
  </div>
    
  );
}
export default CardView;
