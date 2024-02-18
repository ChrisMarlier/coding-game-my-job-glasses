import { useEffect, useState } from "react";
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import { CardCharacter } from "./components";
import { ButtonContainer, CardContainer } from "./styles";
import { Button } from "../../designSystem";

const Home: React.FC = () => {
  const { getCharacters } = useRickAndMortyApi();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});

  const loadCharacters = () => {
    getCharacters({ page }).then((res) => {
      setPage(page + 1);
      setPagination(res.info);
      setCharacters([...characters, ...res.results]);
    });
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div>
      <CardContainer>
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </CardContainer>
      {pagination && page <= pagination.pages && (
        <ButtonContainer>
          <Button
            color="lightBlue"
            size="large"
            margin="10px"
            onClick={() => loadCharacters()}
          >
            Load more
          </Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default Home;
