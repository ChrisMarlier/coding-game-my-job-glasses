type Character = {
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  location: {
    name: string;
  };
};
