import {
  GET_BATCH_METRICS,
  GET_BATCH_OVERVIEW,
  GET_ANALYTICAL,
  GET_METRICS_LIST,
  GET_CUSTOM_GRAPH,
  GET_BATCH_LIST,
  GET_BATCH_METRICS_INTERVLAS
  } from "@/constants/apiEndpoints";
  import { fetchData } from "../api";
  import { HTTP_METHODS } from "@/constants/constants";
  
  export const getBatchMetrics = async ({batchId, time, metricType} : any) => {
  const res = await fetchData(
  `${GET_BATCH_METRICS}?batchId=${batchId}&metricType=${metricType}&time=${time}`,
  HTTP_METHODS.GET,
  );
  return res;
  };

   
  export const getBatchMetricIntervals = async ({batchId, time , timeStamp} : any) => {
    const res = await fetchData(
    `${GET_BATCH_METRICS_INTERVLAS}?batchId=${batchId}&time=${time}&timeStamp=${timeStamp}`,
    HTTP_METHODS.GET,
    );
    return res;
    };
  
  export const getAnalyticals = async ({batchId} : any) => {
  const res = await fetchData(
  `${GET_ANALYTICAL}?batchId=${batchId}`,
  HTTP_METHODS.GET,
  );
  return res;
  };
  export const getBatchOverview = async ({batchId, time} : any) => {
  const res = await fetchData(
  `${GET_BATCH_OVERVIEW}?batchId=${batchId}`,
  HTTP_METHODS.GET,
  );
  return res;
  };
  export const getMetricsList = async () => {
  const res = await fetchData(
  `${GET_METRICS_LIST}`,
  HTTP_METHODS.GET,
  );
  return res;
  };
  export const getBatchList = async () => {
  const res = await fetchData(
  `${GET_BATCH_LIST}`,
  HTTP_METHODS.GET,
  );
  return res;
  };
  export const getCustomGraph = async ({batchId, body} : any) => {
  const res = await fetchData(
  `${GET_CUSTOM_GRAPH}?batchId=${batchId}&time=3`,
  HTTP_METHODS.POST,
  body
  );
  return res;
  };