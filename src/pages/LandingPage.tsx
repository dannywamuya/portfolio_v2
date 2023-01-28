import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <Box w={"100vw"} h={"100vh"} bg={"brand.mainBg"}>
      <Navbar />
    </Box>
  );
};

export default LandingPage;
