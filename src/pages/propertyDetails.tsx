import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPropertyDetails } from "../api/mockApi";
import { PropertyList } from "../api/apiTypes";

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyList | null>(null);

  useEffect(() => {
    async function fetchPropertyDetails() {
      if (id) {
        const propertyDetails = await getPropertyDetails(id);
        if (propertyDetails) setProperty(propertyDetails);
      }
    }
    fetchPropertyDetails();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/2 p-6">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.address}</p>
        <p className="text-gray-700 text-lg mb-4">${property.price}</p>
        <p className="text-gray-700 mb-2">
          <strong>Beds:</strong> {property.beds}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Bathrooms:</strong> {property.bath}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Covered Area:</strong> {property.coveredAreaSQFT} sqft
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Property Type:</strong> {property.propertyType}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>
            {property.isCommercial ? "Commertial Area" : "Non-Commertial Area"}
          </strong>
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
