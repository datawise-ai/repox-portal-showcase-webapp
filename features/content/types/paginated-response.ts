export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: ISort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ISort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

export interface IPageableResponse<T> {
  content: T[];
  pageable: IPageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: ISort;
  empty: boolean;
}
