import { AWS_S3_BUCKET_URL } from "../constants/constants";

export const downloadFile = async (filePath: string) => {
  try {
    const response = await fetch(`${AWS_S3_BUCKET_URL + filePath}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filePath.split("/").pop() || "download";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download file:", error);
    throw error;
  }
};
