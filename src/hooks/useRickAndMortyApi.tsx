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
    filters?: Filters;
  };

  const getCharacters = async ({ page = 1, filters }: GetCharactersParams) =>
    await axios
      .get("https://rickandmortyapi.com/api/character", {
        params: {
          ...filters,
          page,
        },
      })
      .then((res: getCharactersResponse) => res.data);

  return { getCharacters };
};

export default useRickAndMortyApi;
