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

type getCharacterResponse = {
  data: Character;
};

type GetCharactersParams = {
  page?: number;
  filters?: Filters;
};
