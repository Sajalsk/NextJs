import { fetchData } from "../api";
import { HTTP_METHODS } from "@/constants/constants";
import {
  ADD_BATCH,
  GET_ALL_BATCHES,
  GET_BATCH_BY_ID,
  GET_BATCH_BY_PROTOCOL_ID,
  GET_FILTER_SEARCH_BATCH,
  GET_BATCH_EXCEL_VALIDATE,
  CREATE_RETROACTIVE_BATCH,
  DATA_UPLOAD_RETROACTIVE_BATCH,
} from "@/constants/apiEndpoints";

export const getBatches = async (pageNum = 0, pageSize = 10, body: any) => {
  const res = await fetchData(
    `${GET_FILTER_SEARCH_BATCH}?pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getBatchById = async () => {
  const res = await fetchData(GET_BATCH_BY_ID, HTTP_METHODS.GET);
  return res;
};

export const addBatch = async (data: any) => {
  const res = await fetchData(ADD_BATCH, HTTP_METHODS.POST, data);
  return res;
};

export const getBatchByProtocolId = async (protocolId: any) => {
  const res = await fetchData(
    `${GET_BATCH_BY_PROTOCOL_ID}/check?protocolId=${protocolId}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const getAllBatches = async (body?: any) => {
  const res = await fetchData(GET_ALL_BATCHES, HTTP_METHODS.POST, body);
  return res;
};

export const validateExcel = async (
  startDateTime: any,
  endDateTime: any,
  protocolId: any,
  body: any,
) => {
  const res = await fetchData(
    `${GET_BATCH_EXCEL_VALIDATE}?startDateTime=${startDateTime}&endDateTime=${endDateTime}&protocolId=${protocolId}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};
export const createRetroactiveBatch = async (body: any) => {
  const res = await fetchData(
    `${CREATE_RETROACTIVE_BATCH}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const validateRetroactiveExcelData = async (
  startDateTime: string,
  endDateTime: string,
  protocolId: string,
  formData: FormData,
) => {
  return await validateExcel(startDateTime, endDateTime, protocolId, formData);
};

export const uploadRetroactiveBatchData = async (
  batchId: string,
  seedTrainStage: string,
  formData: FormData,
) => {
  const res = await fetchData(
    `${DATA_UPLOAD_RETROACTIVE_BATCH}?batchId=${batchId}&seedTrainStage=${seedTrainStage}`,
    HTTP_METHODS.POST,
    formData,
  );
  return res;
};
