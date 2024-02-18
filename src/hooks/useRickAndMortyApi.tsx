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

  type GetCharactersParams = {
    page?: number;
  };

  const getCharacters = async ({ page = 1 }: GetCharactersParams) =>
    await axios
      .get("https://rickandmortyapi.com/api/character", {
        params: { page },
      })
      .then((res: getCharactersResponse) => res.data);

  return { getCharacters };
};

export default useRickAndMortyApi;
