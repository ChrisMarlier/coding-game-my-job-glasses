import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import { Container, FieldsContainer } from "./styles";
import { StatusIndicator, Text } from "../../designSystem";

const ShowCharacter: React.FC = () => {
  let { id } = useParams<string>();
  const { getCharacter } = useRickAndMortyApi();
  const [character, setCharacter] = useState<Character>();

  const Field = ({ text }: { text: string }) => {
    return (
      <Text mt={20} size="1.3rem" color="white">
        {text}
      </Text>
    );
  };

  useEffect(() => {
    id && getCharacter(id).then((res) => setCharacter(res));
  }, [id]);

  return (
    <Container>
      {character && (
        <>
          <img
            style={{ marginTop: "50px" }}
            src={character.image}
            alt="Character"
          />
          <Text mt={50} size="1.7rem" bold color="white">
            {character.name}
          </Text>

          <FieldsContainer>
            <div style={{ display: "block", marginTop: 20, marginBottom: 20 }}>
              <StatusIndicator
                float="none"
                variant={character.status}
                text={character.status}
              />
            </div>
            <Field text={`Gender: ${character.gender}`} />
            <Field text={`Specie: ${character.species}`} />
            <Field
              text={`Type: ${character.type === "" ? "Unknown" : character.type}`}
            />
            <Field text={`Location: ${character.location.name}`} />
          </FieldsContainer>
        </>
      )}
    </Container>
  );
};

export default ShowCharacter;
