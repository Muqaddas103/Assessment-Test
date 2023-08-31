import axios, { AxiosResponse } from "axios";
import { ListingParams, PropertyList, PropertyListResponse } from "./apiTypes";



export async function getPropertyDetails(id: string): Promise<PropertyList | null> {
  try {
    const response: AxiosResponse<PropertyList> = await axios.get(`${process.env.REACT_APP_BASE_URL}/listings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching property details:", error);
    return null;
  }
}

export async function getPropertyListings(params: ListingParams): Promise<PropertyListResponse> {
  try {
    const response: PropertyListResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/listings`, {
      params: Object.fromEntries(
        Object.entries(params).filter(([_, v]) => v !== "")
      ),
    });
    return response;
  } catch (error) {
    console.error(
      "Error fetching property listings:",
      error
    );
    return { data: [], headers: undefined }; // Return a valid empty PropertyListResponse
  }
}

