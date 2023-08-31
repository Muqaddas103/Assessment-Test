export interface ListingParams {
  _page: number;
  _limit: number;
  _sort?: string;
  _order?: string;
  title_like?: string;
  price_gte?: string;
  price_lte?: string;
  bath?: string;
  beds?: string;
}
export interface PropertyList {
  id: string;
  imageUrl: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  bath: number;
  coveredAreaSQFT: number;
  propertyType: string;
  isCommercial: boolean;
}
export interface PropertyListResponse {
    data: PropertyList[]; 
    headers?: {
      get(header: string): string | null;
    };
   
  }
