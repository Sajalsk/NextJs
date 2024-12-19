import {
  ADD_CELL,
  ADD_MATERIAL,
  ADD_MEDIUM,
  GET_BIOREACTOR_ALERT_FORM,
  GET_CELL_BY_ID,
  GET_CELL_LIST,
  GET_CELL_TYPE_LIST,
  GET_CHECK_BOX_LIST,
  GET_FILTER_SEARCH_CELL,
  GET_FILTER_SEARCH_MATERIAL,
  GET_FILTER_SEARCH_MEDIUM,
  GET_MASTER_LIST_CELLS,
  GET_MASTER_LIST_MATERIAL,
  GET_MASTER_LIST_MEDIUM,
  GET_MATERIAL_BY_ID,
  GET_MEDIUM_BY_ID,
  GET_NON_COMMERCIAL_CELL_BY_ID,
  GET_SOURCE_LIST_CELLS,
  GET_SPECIES_LIST_CELLS,
  GET_TYPE_LIST_CELLS,
} from "@/constants/apiEndpoints";
import { HTTP_METHODS } from "@/constants/constants";
import { fetchData } from "../api";

// cells
export const getFilterSearchCell = async (
  pageNum = 0,
  pageSize = 10,
  body: any,
) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_CELL}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};
export const addCell = async (body: any) => {
  const res = await fetchData(ADD_CELL, HTTP_METHODS.POST, body);
  return res;
};
export const getMasterList = async () => {
  const res = await fetchData(GET_MASTER_LIST_CELLS, HTTP_METHODS.GET);
  return res;
};

export const getSourceList = async () => {
  const res = await fetchData(GET_SOURCE_LIST_CELLS, HTTP_METHODS.GET);
  return res;
};

export const getSpeciesList = async () => {
  const res = await fetchData(GET_SPECIES_LIST_CELLS, HTTP_METHODS.GET);
  return res;
};

export const getTypeList = async () => {
  const res = await fetchData(GET_TYPE_LIST_CELLS, HTTP_METHODS.GET);
  return res;
};

export const getCellById = async (id: string) => {
  const res = await fetchData(`${GET_CELL_BY_ID}/${id}`, HTTP_METHODS.GET);
  return res;
};

export const getCellList = async () => {
  const res = await fetchData(GET_CELL_LIST, HTTP_METHODS.GET);
  return res;
};

export const getNonCommercialCellById = async (id: string) => {
  const res = await fetchData(
    `${GET_NON_COMMERCIAL_CELL_BY_ID}/${id}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const getCellTypeList = async () => {
  const res = await fetchData(GET_CELL_TYPE_LIST, HTTP_METHODS.GET);
  return res;
};

// medium
export const getFilterSearchMedium = async (
  pageNum = 0,
  pageSize = 10,
  body: any,
) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_MEDIUM}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const addMedium = async (body: any) => {
  const res = await fetchData(ADD_MEDIUM, HTTP_METHODS.POST, body);
  return res;
};

export const getMediumList = async () => {
  const res = await fetchData(GET_MASTER_LIST_MEDIUM, HTTP_METHODS.GET);
  return res;
};

export const getMediumById = async (id: string) => {
  const res = await fetchData(`${GET_MEDIUM_BY_ID}/${id}`, HTTP_METHODS.GET);
  return res;
};

// material
export const getFilterSearchMaterial = async (
  pageNum = 0,
  pageSize = 10,
  body: any,
) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_MATERIAL}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getMasterListMaterial = async () => {
  const res = await fetchData(GET_MASTER_LIST_MATERIAL, HTTP_METHODS.GET);
  return res;
};

export const getMaterialById = async (id: string) => {
  const res = await fetchData(`${GET_MATERIAL_BY_ID}/${id}`, HTTP_METHODS.GET);
  return res;
};

export const getCheckBoxList = async () => {
  const res = await fetchData(GET_CHECK_BOX_LIST, HTTP_METHODS.GET);
  return res;
};

export const addMaterial = async (body: any) => {
  const res = await fetchData(ADD_MATERIAL, HTTP_METHODS.POST, body);
  return res;
};

// AlertForm

export const BioAlertForm = async (body: any) => {
  const res = await fetchData(
    GET_BIOREACTOR_ALERT_FORM,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};
