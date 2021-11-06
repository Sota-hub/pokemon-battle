import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useFetchMove = (moveId) => {
  const url = `https://pokeapi.co/api/v2/move/${moveId}/`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return data;
};
