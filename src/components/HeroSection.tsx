import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      justify={"center"}
      h={"100%"}
      w={"100%"}
      direction={"column"}
      px={["8", "12", "32"]}
    >
      <Flex direction={"column"}>
        <Text color={"brand.white"}>Hi, my name is</Text>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          color={"brand.white"}
          fontWeight={"900"}
        >
          Danny Wamuya.
        </Heading>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          color={"brand.altMain"}
          fontWeight={"900"}
        >
          I design and build and web applications.
        </Heading>
      </Flex>
      <Flex width={["100%", "100%", "50%"]} my={"8"}>
        <Text>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </Text>
      </Flex>
      <Flex>
        <Button>Contact Me</Button>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
