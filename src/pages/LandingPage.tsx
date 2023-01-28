import { Flex } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <Flex direction={"column"} w={"100vw"} h={"100vh"} bg={"brand.mainBg"}>
      <Navbar />
      <HeroSection />
    </Flex>
  );
};

export default LandingPage;
