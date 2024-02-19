import { Text } from "../../../../designSystem";

const Header = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <img
        style={{ backgroundColor: "white", marginTop: "20px" }}
        width={400}
        src="https://cdn.jobs.makesense.org/projects/4701/project/1660823348774l6yzc9if.png"
      />
      <Text mt={50} size="2rem" bold color="white">
        Rick and Morty API for MyJobGlasses
      </Text>
      <Text mt={30} size="1.5rem" color="white">
        By Christopher Marlier
      </Text>
    </div>
  );
};

export default Header;
