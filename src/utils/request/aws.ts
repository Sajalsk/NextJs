import {
  DOWNLOAD_FILE_FROM_S3_URL,
  GET_SIGNED_URL,
} from "@/constants/apiEndpoints";
import { HTTP_METHODS } from "@/constants/constants";
import { fetchData } from "../api";

// signed url
export const getSignedUrl = async (body: any) => {
  const res = await fetchData(GET_SIGNED_URL, HTTP_METHODS.POST, body);
  return res;
};

// download file
export const downloadFileFromS3Url = async (batchId: number, body: any) => {
  const res = await fetchData(
    `${DOWNLOAD_FILE_FROM_S3_URL}?batchId=${batchId}`,
    HTTP_METHODS.POST,
    body,
  );
  return res;
};
