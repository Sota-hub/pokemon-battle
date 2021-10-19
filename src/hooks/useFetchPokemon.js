import useSWR from "swr";

const fetcher = (...urls) => {
  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  return Promise.all(urls.map((url) => getData(url)));
};

// Base url for pokemon api
const baseUrl = (query) => `https://pokeapi.co/api/v2/${query}`;

// Accepts Query as an argument
export const useFetchPokemon = (queryArray) => {
  const urls = queryArray.map((query) => baseUrl(query));
  console.log(urls);
  const { data, error } = useSWR(urls, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
