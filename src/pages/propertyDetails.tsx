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
 <>
      <div className="mt-6 p-6">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Back to Home
        </Link>
      </div>
      <div className="flex border shadow-md flex-col md:flex-row">
        <div className="md:w-[540px] w-full p-6">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GCLlsnJWpN214aTwvRDa--EOMZQvdMGl00jAz8Zr1g&s"
            }
            alt={property.title}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {property.title}
          </h2>
          <p className="text-gray-600 mb-2">{property.address}</p>
          <p className="text-blue-700 text-lg mb-4">
            ${property.price}
          </p>
          <div className="border rounded-md bg-gray-100 px-4 py-2">
            <p
              className=" text-xl font-semibold mb-4 w-full
              text-black"
            >
              Overview
            </p>
            <p className="text-gray-700 mb-2 justify-between flex">
              <p className="text-blue-700 font-semibold">Beds:</p>{" "}
              {property.beds}
            </p>
            <p className="text-gray-700 mb-2 justify-between flex">
              <p className="text-blue-700 font-semibold">Bathrooms:</p>{" "}
              {property.bath}
            </p>
            <p className="text-gray-700 mb-2 justify-between flex">
              <p className="text-blue-700 font-semibold">Covered Area:</p>
              {property.coveredAreaSQFT} sqft
            </p>
            <p className="text-gray-700 mb-2 justify-between flex">
              <p className="text-blue-700 font-semibold">Property Type:</p>{" "}
              {property.propertyType}
            </p>
            <p className="text-gray-700 mb-2 justify-between flex">
              <p className="text-blue-700 font-semibold">Area Type:</p>
              {property.isCommercial
                ? "Commertial Area"
                : "Non-Commertial Area"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetail;
