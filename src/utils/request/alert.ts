import { HTTP_METHODS } from "@/constants/constants";
import { fetchData } from "../api";
import { ENABLE_DISABLE_ALERT } from "@/constants/apiEndpoints";

export const setAlert = (batchId: string, enabled: boolean) => {
  const res = fetchData(
    `${ENABLE_DISABLE_ALERT}?batchId=${batchId}&doEnable=${enabled}`,
    HTTP_METHODS.POST,
  );
  return res;
};
