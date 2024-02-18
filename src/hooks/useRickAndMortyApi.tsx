import axios from "axios";

const useRickAndMortyApi = () => {
  type getCharactersResponse = {
    data: {
      results: Character[];
      info: {
        count: number;
        next: string;
        pages: number;
        prev: string;
      };
    };
  };
  const getCharacters = async () =>
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res: getCharactersResponse) => res.data);

  return { getCharacters };
};

export default useRickAndMortyApi;
