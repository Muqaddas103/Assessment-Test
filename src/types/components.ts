
import { ListingParams, PropertyList } from "../api/apiTypes";

export interface CardViewProps {
    propertyList: PropertyList[];
  }
  
  export interface DataTableViewProps {
    propertyPaginationList: PropertyList[];
    params: ListingParams;
    setParams: React.Dispatch<React.SetStateAction<ListingParams>>;
  }
  
  export interface PaginationProps {
    _page: number;
    totalPages: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    params: ListingParams;
    setParams: React.Dispatch<React.SetStateAction<ListingParams>>;
  }

export interface TableSearchProps {
    params: ListingParams; 
    setParams: React.Dispatch<React.SetStateAction<ListingParams>>;
  }

  export interface TableSortProps {
    params: ListingParams;
    setParams: React.Dispatch<React.SetStateAction<ListingParams>>;
    title: string;
  }
  export interface TableFiltersProps {
    fetchSortedPaginatedListings: () => void; 
    params: ListingParams; 
    setParams: React.Dispatch<React.SetStateAction<ListingParams>>;
  }