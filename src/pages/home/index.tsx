import { useEffect, useState } from "react";
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import { CardCharacter } from "./components";
import { CardContainer } from "./styles";

const Home: React.FC = () => {
  const { getCharacters } = useRickAndMortyApi();

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res.results);
    });
  }, []);

  return (
    <div>
      <CardContainer>
        {characters.map((character) => (
          <CardCharacter character={character} />
        ))}
      </CardContainer>
    </div>
  );
};

export default Home;
