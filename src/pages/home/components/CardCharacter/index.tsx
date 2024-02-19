import {
  CardContainer,
  InfosContainer,
  LeftContainer,
  StatusIndicatorContainer,
  RightContainer,
  Image,
} from "./styles";
import { StatusIndicator, Text } from "../../../../designSystem";
import { useNavigate } from "react-router-dom";

const CardCharacter = ({ character }: { character: Character }) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      data-cy={character.id}
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <LeftContainer>
        <Image src={character.image} />
      </LeftContainer>
      <RightContainer>
        <InfosContainer>
          <Text color="white" bold size="1.3rem">
            {character.name}{" "}
          </Text>
          <Text color="white" mt={10}>
            Last seen in:
          </Text>
          <Text color="white" mt={5}>
            {character.location.name}
          </Text>
        </InfosContainer>
        <StatusIndicatorContainer>
          <StatusIndicator variant={character.status} text={character.status} />
        </StatusIndicatorContainer>
      </RightContainer>
    </CardContainer>
  );
};

export default CardCharacter;
