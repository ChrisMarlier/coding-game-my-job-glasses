import { CardContainer, LeftContainer, RightContainer, Image } from "./styles";
import { Text } from "../../../../designSystem";

const CardCharacter = ({ character }: { character: Character }) => {
  return (
    <CardContainer>
      <LeftContainer>
        <Image src={character.image} />
      </LeftContainer>
      <RightContainer>
        <Text bold size="1.3rem">
          {character.name}{" "}
        </Text>
        <Text mt={10}>Last seen in:</Text>
        <Text mt={5}>{character.location.name}</Text>
      </RightContainer>
    </CardContainer>
  );
};

export default CardCharacter;
