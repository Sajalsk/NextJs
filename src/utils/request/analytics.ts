import {
  GET_AVG_CELL_PERFORMANCE,
  GET_CELL_MASS_PRODUCED,
  GET_CULTURE_RESULT,
  GET_OVERALL_RATE,
  GET_SEED_TRAIN_RESULT,
  GET_STATICAL_SUMMARY,
  GET_BATCHLIST,
  GET_BATCH_DATA,
  GET_BATCH_EXCEL_VALIDATE,
} from "@/constants/apiEndpoints";
import { fetchData } from "../api";
import { HTTP_METHODS } from "@/constants/constants";

export const getAvgCellPerformance = async () => {
  const res = await fetchData(GET_AVG_CELL_PERFORMANCE, HTTP_METHODS.GET);
  return res;
};

export const getCellMassProduced = async (body: any) => {
  const res = await fetchData(GET_CELL_MASS_PRODUCED, HTTP_METHODS.POST, body);
  return res;
};

export const getOverallRate = async () => {
  const res = await fetchData(GET_OVERALL_RATE, HTTP_METHODS.GET);
  return res;
};

export const getSeedTrainResult = async (body: any) => {
  const res = await fetchData(GET_SEED_TRAIN_RESULT, HTTP_METHODS.POST, body);
  return res;
};
export const getStaticalSummary = async (body: any) => {
  const res = await fetchData(GET_STATICAL_SUMMARY, HTTP_METHODS.POST, body);
  return res;
};
export const getCultureDayResult = async (body: any) => {
  const res = await fetchData(GET_CULTURE_RESULT, HTTP_METHODS.POST, body);
  return res;
};

export const getBatchList = async () => {
  const res = await fetchData(GET_BATCHLIST, HTTP_METHODS.GET);
  return res;
};

export const getBatchData = async (batchId: string, tenantId: string) => {
  const res = await fetchData(
    `${GET_BATCH_DATA}?batchId=${batchId}&tenantId=${tenantId}`,
    HTTP_METHODS.GET,
  );
  return res;
};


export const getBatchExcelValidate = async (
  formattedStartDate: string,
  formattedEndDate: string,
  protocolId: string,
  body: any
) => {
  return fetchData(
    `${GET_BATCH_EXCEL_VALIDATE}?startDateTime=${formattedStartDate}&endDateTime=${formattedEndDate}&protocolId=${protocolId}`,
    HTTP_METHODS.POST,
    body
  );
};

