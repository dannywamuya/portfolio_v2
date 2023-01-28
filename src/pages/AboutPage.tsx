import { Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <Flex
      direction={"column"}
      maxW={"100vw"}
      minH={"100vh"}
      bg={"brand.bgGradient"}
    >
      <Navbar showNav />
      <Flex mt={"40"} px={["20", "10", "20"]} width="full" direction={"column"}>
        <Flex w="full">
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color={"brand.altMain"}
            fontWeight={"900"}
          >
            About Me.
          </Heading>
        </Flex>
        <Flex px={["0", "2", "2"]} w="full" direction={"column"}>
          <Flex my={8} justify={"space-between"} w="full">
            <Text fontSize={"lg"} borderBottom={"1px solid"}>
              Engineering
            </Text>
            <Link href="https://github.com/dannywamuya" target={"_blank"}>
              <Icon boxSize={"24px"} color={"brand.mainColor"} as={FaGithub} />
            </Link>
          </Flex>
          <Flex>
            <Text>
              When it comes to business, first impressions matter, and good
              website design is the key to capitalizing on them. An excellent
              site is not judged solely on its looks, but on its functionality
              and usability as well. My experience as a programmer allows me to
              come up with intelligent solutions to technical challenges, while
              at the same time designing sleek and visually appealing websites.
              Aside from having extensive knowledge of recognized technical
              standards, I am conversant with modern building practices.
            </Text>
          </Flex>
          <Flex my={8} justify={"space-between"} w="full">
            <Text fontSize={"lg"} borderBottom={"1px solid"}>
              Design
            </Text>
          </Flex>
          <Flex>
            <Text>
              Although I am not the typical designer, I do possess excellent
              visual abilities, and this makes me an excellent presenter,
              allowing me to successfully communicate design ideas to
              stakeholders and design teams. With my strong conceptualization
              ability, I am able to visualize and create beautiful works.
              Lastly, you can find me mostly tweaking stylesheets and creating
              fluid user experiences.
            </Text>
          </Flex>
          <Flex my={8} justify={"space-between"} w="full">
            <Text fontSize={"lg"} borderBottom={"1px solid"}>
              Education
            </Text>
          </Flex>
          <Flex>
            <Text>
              Although I am not the typical designer, I do possess excellent
              visual abilities, and this makes me an excellent presenter,
              allowing me to successfully communicate design ideas to
              stakeholders and design teams. With my strong conceptualization
              ability, I am able to visualize and create beautiful works.
              Lastly, you can find me mostly tweaking stylesheets and creating
              fluid user experiences.
            </Text>
          </Flex>
          <Flex my={"8"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutPage;
