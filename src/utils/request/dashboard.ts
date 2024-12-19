import {
  GET_RUNTIME,
  GET_CELL_MASS,
  GET_WATER_CONSUMPTION,
  GET_ENERY_CONSUMPTION,
  GET_CELL_COST,
  GET_SPECIES_LIST,
  GET_STREAMING_INITIAL_DATA,
} from "@/constants/apiEndpoints";
import { fetchData } from "../api";
import { HTTP_METHODS } from "@/constants/constants";

export const getRuntime = async () => {
  const res = await fetchData(GET_RUNTIME, HTTP_METHODS.GET);
  return res;
};
export const getCellMass = async (body: any) => {
  const res = await fetchData(GET_CELL_MASS, HTTP_METHODS.POST, body);
  return res;
};
export const getCellCost = async (body: any) => {
  const res = await fetchData(GET_CELL_COST, HTTP_METHODS.POST, body);
  return res;
};
export const getWaterConsumption = async () => {
  const res = await fetchData(GET_WATER_CONSUMPTION, HTTP_METHODS.GET);
  return res;
};
export const getEnergyCunsumption = async () => {
  const res = await fetchData(GET_ENERY_CONSUMPTION, HTTP_METHODS.GET);
  return res;
};
export const getSpeciesList = async () => {
  const res = await fetchData(GET_SPECIES_LIST, HTTP_METHODS.GET);
  return res;
};

// Dashboard WARNING/STATUS data before socket
export const getInitialStreamingData = async (tenantId: string) => {
  const res = await fetchData(
    `${GET_STREAMING_INITIAL_DATA}?tenantId=${tenantId}`,
    HTTP_METHODS.GET,
  );
  return res;
};
