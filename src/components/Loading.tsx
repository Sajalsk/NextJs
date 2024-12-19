"use client";

import { ClipLoader } from "react-spinners";

interface LoadingProps {
  height?: string;
  loaderSize?: number;
}

export const Loading = ({ height, loaderSize }: LoadingProps) => {
  return (
    <div className={`flex h-${height || 96} items-center justify-center`}>
      <ClipLoader color="#71717a" size={loaderSize || 50} />
    </div>
  );
};
