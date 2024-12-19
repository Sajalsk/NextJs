const CHUNK_SIZE = 10 * 1024 * 1024;

export const uploadFileInChunks = async (
  file: File,
  url: string,
  onProgress: (progress: number) => void,
) => {
  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

  for (let chunkNumber = 0; chunkNumber < totalChunks; chunkNumber++) {
    const start = chunkNumber * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, file.size);
    const blob = file.slice(start, end);

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
        /* "Content-Range": `bytes ${start}-${end - 1}/${file.size}`, */
      },
      body: file,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file chunk");
    }

    const progress = Math.round(((chunkNumber + 1) / totalChunks) * 100);
    onProgress(progress);
  }
};
