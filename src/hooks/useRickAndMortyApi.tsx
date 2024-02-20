import axios from "axios";

const useRickAndMortyApi = () => {
  const baseUrl = "https://rickandmortyapi.com/api";

  const getCharacters = async ({ page = 1, filters }: GetCharactersParams) =>
    await axios
      .get(`${baseUrl}/character`, {
        params: {
          ...filters,
          page,
        },
      })
      .then((res: getCharactersResponse) => res.data)
      .catch(() => {
        return { info: { pages: 0 }, results: [] };
      });

  const getCharacter = async (id: string) =>
    await axios.get(`${baseUrl}/character/${id}`).then((res) => res.data);

  return { getCharacter, getCharacters };
};

export default useRickAndMortyApi;
