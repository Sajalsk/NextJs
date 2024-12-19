import { format } from "date-fns";

// Format the date into separate date and time strings
export const formatDate = (date: string) => {
  return {
    formattedDate: format(new Date(date), "dd/MM/yyyy"),
    formattedTime: format(new Date(date), "hh:mm:ss a"), // Added AM/PM format
  };
};

export const isObjectEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

// Utility function to get the concentration of a specific component
export const getComponentConcentration = (
  components: any[],
  componentName: string,
) => {
  // Check if components is defined and is an array
  if (!Array.isArray(components)) {
    return "-"; // Return a placeholder or empty string if components is not an array
  }

  const component = components.find(
    (comp) => comp.componentName === componentName,
  );
  return component ? component.concentration : "-"; // Return concentration or placeholder
};

// get user details
export const getFirstName = () =>
  typeof window !== "undefined"
    ? atob(localStorage.getItem("firstName") || "")
    : "";

export const getLastName = () =>
  typeof window !== "undefined"
    ? atob(localStorage.getItem("lastName") || "")
    : "";

export const getFullName = () => `${getFirstName()} ${getLastName()}`;

export const getEmail = () =>
  typeof window !== "undefined"
    ? atob(localStorage.getItem("email") || "")
    : "";
