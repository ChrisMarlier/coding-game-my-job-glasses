import { useEffect, useState } from "react";
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import { CardCharacter } from "./components";
import { CardContainer } from "./styles";

const Home: React.FC = () => {
  const { getCharacters } = useRickAndMortyApi();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters({ page }).then((res) => {
      setPagination(res.info);
      setCharacters(res.results);
    });
  }, []);

  const loadMore = async () => {
    getCharacters({ page: page + 1 }).then((res) => {
      setPage(page + 1);
      setCharacters([...characters, ...res.results]);
    });
  };

  return (
    <div>
      <CardContainer>
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </CardContainer>
      {pagination && page + 1 <= pagination.pages && (
        <button onClick={() => loadMore()}>LoadMore</button>
      )}
    </div>
  );
};

export default Home;
