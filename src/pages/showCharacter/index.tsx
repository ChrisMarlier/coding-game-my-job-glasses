import React from "react";
import { useParams } from "react-router-dom";

const ShowCharacter: React.FC = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Welcome to show character</h1>
    </div>
  );
};

export default ShowCharacter;
