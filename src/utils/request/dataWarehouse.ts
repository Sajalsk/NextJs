import {
  GET_ALL_BATCH_SELECT_QUARTER_OPTIONS,
  GET_BATCHES_BY_BIOREACTOR_TYPE,
  GET_BATCHES_BY_CELL_TYPE,
  GET_BATCHES_BY_MATERIAL_TYPE,
  GET_BATCHES_BY_MEDIUM_TYPE,
  GET_BATCHES_BY_PROTOCOL_TYPE,
  GET_FOLDER_FILES,
  GET_IMAGES_BY_BATCH_ID,
} from "@/constants/apiEndpoints";
import { HTTP_METHODS } from "@/constants/constants";
import { fetchData } from "../api";

export const getBatchesByBioreactor = async (id: any) => {
  const res = await fetchData(
    `${GET_BATCHES_BY_BIOREACTOR_TYPE}?bioreactorId=${id}`,
    HTTP_METHODS.POST,
  );
  return res;
};

export const getBatchesByCellType = async (body: any) => {
  const res = await fetchData(
    GET_BATCHES_BY_CELL_TYPE,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getBatchesByMaterialId = async (body: any) => {
  const res = await fetchData(
    GET_BATCHES_BY_MATERIAL_TYPE,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getBatchesByMediumId = async (body: any) => {
  const res = await fetchData(
    GET_BATCHES_BY_MEDIUM_TYPE,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getBatchByProtocol = async (body: any) => {
  const res = await fetchData(
    GET_BATCHES_BY_PROTOCOL_TYPE,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getImagesByBatchId = async (batchId: any) => {
  const res = await fetchData(
    `${GET_IMAGES_BY_BATCH_ID}?batchId=${batchId}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const getFolderFiles = async (body: any) => {
  const res = await fetchData(GET_FOLDER_FILES, HTTP_METHODS.POST, body);
  return res;
};

export const getAllQuarterSelectOptions = async () => {
  const res = await fetchData(
    GET_ALL_BATCH_SELECT_QUARTER_OPTIONS,
    HTTP_METHODS.GET,
  );
  return res;
};
