import {
  GET_FILTER_SEARCH_FACILITY,
  GET_AVAILABLE_DEVICE_FACILITY,
  SAVE_DESIGN_FACILITY,
  GET_FACILITY_LIST,
  GET_FACILITY_BY_ID,
  GET_ACTIVE_DEVICE_FACILITY,
} from "@/constants/apiEndpoints";
import { fetchData } from "../api";
import { HTTP_METHODS } from "@/constants/constants";
export const getFilterSearchFacility = async (
  pageNum = 0,
  pageSize = 10,
  body: any,
) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_FACILITY}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const saveDesignFacility = async (body: any) => {
  const res = await fetchData(SAVE_DESIGN_FACILITY, HTTP_METHODS.POST, body);
  return res;
};

export const getAvailableDeviceFacility = async () => {
  const res = await fetchData(GET_AVAILABLE_DEVICE_FACILITY, HTTP_METHODS.GET);
  return res;
};

export const getSeedTrainList = async (isRetroActive:any) => {

  // const res = await fetchData(GET_FACILITY_LIST, HTTP_METHODS.GET);
  const res = await fetchData (`${GET_FACILITY_LIST}?isRetroActive=${isRetroActive}`,
  HTTP_METHODS.GET)
  return res;
};

export const getFacilityByID = async (id: string) => {
  const res = await fetchData(`${GET_FACILITY_BY_ID}/${id}`, HTTP_METHODS.GET);
  return res;
};

// get active device
export const getActiveDevice = async (id: any) => {
  const res = await fetchData(
    `${GET_ACTIVE_DEVICE_FACILITY}?id=${id}`,
    HTTP_METHODS.GET,
  );
  return res;
};
