import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <Flex
      direction={"column"}
      w={"100vw"}
      minH={"100vh"}
      bg={"brand.bgGradient"}
    >
      <Navbar showNav />
      Hello
    </Flex>
  );
};

export default AboutPage;
