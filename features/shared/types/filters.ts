export const FILTER_CATEGORIES_ID = "categories";
export const FILTER_SCORE_ID = "score";
export const FILTER_STATUS_ID = "status";
export const FILTER_TYPE_ID = "type";
export const FILTER_AUTHOR_ID = "author";

interface Filter {
  id: string;
  values: string[] | number | string;
}

interface FiltersFormData {
  categories?: string[];
  score?: number;
  author?: string[];
  status?: string;
  type?: string;
}

type FilterKey =
  | typeof FILTER_CATEGORIES_ID
  | typeof FILTER_SCORE_ID
  | typeof FILTER_STATUS_ID
  | typeof FILTER_TYPE_ID
  | typeof FILTER_AUTHOR_ID;

interface FilterComponentProps {
  id: string;
  defaultValues: any;
}

export type { Filter, FiltersFormData, FilterKey, FilterComponentProps };
