import { fetchData } from "../api";
import { HTTP_METHODS } from "@/constants/constants";
import {
  BATCH_ACTION_ADD_MANUAL_DATA,
  BATCH_ACTION_ADD_MEDIUM_DAT,
  BATCH_ACTION_ADD_NOTES,
  BATCH_ACTION_GET_MEDIUM_ID,
  BATCH_ACTION_GET_NOTE_DATA,
  BATCH_ACTION_GET_SEED_TRAIN,
  BATCH_ACTION_UPLOAD_IMAGES,
  GET_BATCH_BY_ID_STAGE,
  GET_BATCH_BY_PROTOCOL,
  GET_PAT_DEVICES,
  INTEGRATE_PAT_DATA,
  PUT_BATCHS,
} from "@/constants/apiEndpoints";

// Upload Images
export const uploadImages = async (body: any) => {
  const res = await fetchData(
    BATCH_ACTION_UPLOAD_IMAGES,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getBatchBySeedTrain = async (id: any) => {
  const res = await fetchData(
    `${BATCH_ACTION_GET_SEED_TRAIN}?batchId=${id}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const getBatchMediumId = async (id: any) => {
  const res = await fetchData(
    `${BATCH_ACTION_GET_MEDIUM_ID}?batchId=${id}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const addManualData = async (body: any) => {
  const res = await fetchData(
    BATCH_ACTION_ADD_MANUAL_DATA,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const addNotes = async (body: any) => {
  const res = await fetchData(BATCH_ACTION_ADD_NOTES, HTTP_METHODS.POST, body);
  return res;
};

export const getBatchNotesData = async (
  batchId: any,
  pageNum = 0,
  pageSize = 100,
  body: any,
) => {
  const res = await fetchData(
    `${BATCH_ACTION_GET_NOTE_DATA}?batchId=${batchId}&pageNum=${pageNum}&pageSize=${pageSize}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const addMediumData = async (body: any) => {
  const res = await fetchData(
    BATCH_ACTION_ADD_MEDIUM_DAT,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};

export const getBatchbyIdstage = async (batchId: any) => {
  const res = await fetchData(
    `${GET_BATCH_BY_ID_STAGE}/${batchId}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const updateProtocol = async (body: any) => {
  const res = await fetchData(PUT_BATCHS, HTTP_METHODS.PUT, body);
  return res;
};

export const getBatchId = async (protocolId: any) => {
  const res = await fetchData(
    `${GET_BATCH_BY_PROTOCOL}/check?protocolId=${protocolId}`,
    HTTP_METHODS.GET,
  );
  return res;
};

// PAT
export const getPatDevices = async (
  batchId: string,
  startDate: string,
  endDate: string,
) => {
  const res = await fetchData(
    `${GET_PAT_DEVICES}?batchId=${batchId}&startDate=${startDate}&endDate=${endDate}`,
    HTTP_METHODS.GET,
  );
  return res;
};

export const integratePatData = async (body: any) => {
  const res = await fetchData(INTEGRATE_PAT_DATA, HTTP_METHODS.POST, body);
  return res;
};
