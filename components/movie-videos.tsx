import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const videos = await getVideos(id);
  return <h5>{JSON.stringify(videos)}</h5>;
}
