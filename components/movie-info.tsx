import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const movie = await getMovie(id);
  return <h5>{JSON.stringify(movie)}</h5>;
}
