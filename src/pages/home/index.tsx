import { useEffect, useState } from "react";
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import { CardCharacter } from "./components";

const Home: React.FC = () => {
  const { getCharacters } = useRickAndMortyApi();

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res.results);
    });
  }, []);

  console.log(characters);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the index page for the home section.</p>
      {characters && characters[0] && (
        <CardCharacter character={characters[0]} />
      )}
    </div>
  );
};

export default Home;
