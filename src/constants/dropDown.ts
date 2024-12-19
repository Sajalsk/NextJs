export const COMPONENTS_SORT_BY = [
  { label: "Asc", value: "ASC" },
  { label: "Desc", value: "DESC" },
];

export const COMPONENTS_LAST_DAYS = [
  {
    label: "Last 15 days",
    value: "15",
  },
  {
    label: "Last 30 days",
    value: "30",
  },
  {
    label: "Last 90 days",
    value: "90",
  },
  { label: "Last 180 days", value: "180" },
  { label: "Last 365 days", value: "365" },
];



 
export const COMPONENTS_BIOREACTIVE = [
  {
    label: "All",
    value: null, // Represents no specific filter
  },
  {
    label: "Normal  ",
    value: false, // Specifically non-bioreactive items
  },
  {
    label: "Retroactive",
    value: true, // Specifically bioreactive items
  },
];
export const BATCHES_STATUS = [
  {
    label: "All batches",
    value: null
  },
  {
    label: "Failed/Stopped batches",
    value: 2
  },
  {
    label: "Completed batches",
    value: 3,
  },
  {
    label: "Running batches",
    value: [0,1], 
  },
];