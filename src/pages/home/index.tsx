import { useEffect, useState } from "react";
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import { CardCharacter, Filters, Header } from "./components";
import { ButtonContainer, CardContainer } from "./styles";
import { Button } from "../../designSystem";

const Home: React.FC = () => {
  const { getCharacters } = useRickAndMortyApi();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});

  const loadNextCharacters = () => {
    getCharacters({ page: page + 1, filters }).then((res) => {
      setPage(page + 1);
      setPagination(res.info);
      setCharacters([...characters, ...res.results]);
    });
  };

  useEffect(() => {
    loadNextCharacters();
  }, []);

  const loadFromSearch = (data: FormFilters) => {
    const newFilters: Filters = {
      name: data.name,
      status: data.status ? data.status.value : null,
      species: data.specie ? data.specie.value : null,
      gender: data.gender ? data.gender.value : null,
    };

    setPage(1);
    setFilters(newFilters);

    getCharacters({ page: 1, filters: newFilters }).then((res) => {
      setPagination(res.info);
      setCharacters(res.results);
    });
  };

  return (
    <div>
      <Header />
      <Filters loadNewData={loadFromSearch} />
      <CardContainer>
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </CardContainer>
      {pagination && page < pagination.pages && (
        <ButtonContainer>
          <Button
            color="lightBlue"
            size="large"
            margin="10px"
            onClick={() => loadNextCharacters()}
          >
            Load more
          </Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default Home;
