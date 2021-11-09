import useSWR from "swr";

const fetcher = (...urls) => {
  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  return Promise.all(urls.map((url) => getData(url)));
};

export const useFetchMove = (ids) => {
  const urls = ids.map((id) => `https://pokeapi.co/api/v2/move/${id}/`);
  console.log(urls);
  const { data, error } = useSWR(urls, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return data;
};
