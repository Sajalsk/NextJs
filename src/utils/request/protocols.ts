import {
  ADD_PROTOCOL,
  GET_FILTER_SEARCH_PROTOCOLS,
  GET_MASTER_LIST_PROTOCOLS,
  GET_PROTOCOL_BY_ID,
  GET_MASTER_LIST_MATERIAL_PROTOCOL,
  GET_MASTER_LIST_MEDIUM_PROTOCOL,
  GET_PAT_LIST,
} from "@/constants/apiEndpoints";
import { fetchData } from "../api";
import { HTTP_METHODS } from "@/constants/constants";

export const getFilterSearchProtocols = async (
  pageNum = 0,
  pageSize = 10,
  body: any,
) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_PROTOCOLS}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const addProtocol = async (body: any) => {
  const res = await fetchData(ADD_PROTOCOL, HTTP_METHODS.POST, body);
  return res;
};

export const getProtocolsList = async (isRetroActive:any) => {
  // const res = await fetchData(GET_MASTER_LIST_PROTOCOLS, HTTP_METHODS.GET);
  const res  = await fetchData (`${GET_MASTER_LIST_PROTOCOLS}?isRetroActive=${isRetroActive}`, HTTP_METHODS.GET)
  return res;
};

export const getProtocolByID = async (id: string) => {
  const res = await fetchData(`${GET_PROTOCOL_BY_ID}/${id}`, HTTP_METHODS.GET);
  return res;
};

export const updateProtocol = async (body: any) => {
  const res = await fetchData(GET_PROTOCOL_BY_ID, HTTP_METHODS.PUT, body);
  return res;
};
export const getMaterialList = async () => {
  const res = await fetchData(
    GET_MASTER_LIST_MATERIAL_PROTOCOL,
    HTTP_METHODS.GET,
  );
  return res;
};
export const getMediumLists = async () => {
  const res = await fetchData(
    GET_MASTER_LIST_MEDIUM_PROTOCOL,
    HTTP_METHODS.GET,
  );
  return res;
};

export const getPatList = async () => {
  const res = await fetchData(GET_PAT_LIST, HTTP_METHODS.GET);
  return res;
};
