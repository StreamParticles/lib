export interface PaginatedResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
}

export interface PaginationSettings {
  page?: number;
  itemsPerPage?: number;
}

export interface SortSettings {
  order?: "asc" | "desc";
  orderBy?: string;
}

export interface Option {
  label: string;
  value: string | number;
}

export interface ListingQuery<Filters = {}> {
  pagination?: PaginationSettings;
  sorter?: SortSettings;
  filters?: Filters;
}
