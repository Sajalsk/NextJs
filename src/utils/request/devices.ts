import {
  ADD_DEVICE,
  GET_BIOREACTORS_LIST,
  GET_CONTROLLERS_LIST,
  GET_DEVICE_BY_ID,
  GET_DEVICE_DETAIL,
  GET_DEVICE_MANUFACTURER_LIST,
  GET_FILTER_SEARCH_DEVICE,
} from "@/constants/apiEndpoints";
import { HTTP_METHODS } from "@/constants/constants";
import { fetchData } from "../api";

export const getFilterSearchDevice = async (
  pageNum = 0,
  pageSize = 10,
  body: any,
) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_DEVICE}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const addDevice = async (body: any) => {
  const res = await fetchData(ADD_DEVICE, HTTP_METHODS.POST, body);
  return res;
};

export const getAllControllers = async () => {
  const res = await fetchData(GET_CONTROLLERS_LIST, HTTP_METHODS.GET);
  return res;
};

export const getAllBioreactors = async (isRetroActiveST:any) => {
  // const res = await fetchData(GET_BIOREACTORS_LIST, HTTP_METHODS.GET);
  const res  =  await fetchData (`${GET_BIOREACTORS_LIST}?isRetroActive=${isRetroActiveST}`
    ,HTTP_METHODS.GET, 
    );
  return res;
};

export const getDeviceManufacturerList = async () => {
  const res = await fetchData(GET_DEVICE_MANUFACTURER_LIST, HTTP_METHODS.GET);
  return res;
};

export const getDeviceById = async (id: string) => {
  const res = await fetchData(`${GET_DEVICE_BY_ID}/${id}`, HTTP_METHODS.GET);
  return res;
};

// get device detail
export const getDeviceDetail = async (id: string) => {
  const res = await fetchData(
    `${GET_DEVICE_DETAIL}?id=${id}`,
    HTTP_METHODS.GET,
  );
  return res;
};
