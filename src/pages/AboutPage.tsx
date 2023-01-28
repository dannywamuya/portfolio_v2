import { Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import SeeMoreSection from "../components/SeeMoreSection";
import { Link as RouterLink } from "@tanstack/react-location";

interface IContent {
  title: string;
  text: string;
}

const content: IContent[] = [
  {
    title: "Engineering",
    text: `When it comes to business, first impressions matter, and good website
    design is the key to capitalizing on them. An excellent site is not
    judged solely on its looks, but on its functionality and usability as
    well. My experience as a programmer allows me to come up with
    intelligent solutions to technical challenges, while at the same time
    designing sleek and visually appealing websites. Aside from having
    extensive knowledge of recognized technical standards, I am conversant
    with modern building practices.`,
  },
  {
    title: "Design",
    text: `Although I am not the typical designer, I do possess excellent
    visual abilities, and this makes me an excellent presenter,
    allowing me to successfully communicate design ideas to
    stakeholders and design teams. With my strong conceptualization
    ability, I am able to visualize and create beautiful works.
    Lastly, you can find me mostly tweaking stylesheets and creating
    fluid user experiences.`,
  },
];

const ContentSection = ({
  content: { text, title },
}: {
  content: IContent;
}) => {
  return (
    <>
      <Flex my={8} justify={"space-between"} w="full">
        <Text
          fontSize={"lg"}
          borderBottom={"1px solid"}
          color={"brand.lightGreen"}
        >
          {title}
        </Text>
        {title === "Engineering" ? (
          <Link href="https://github.com/dannywamuya" target={"_blank"}>
            <Icon boxSize={"24px"} color={"brand.mainColor"} as={FaGithub} />
          </Link>
        ) : null}
      </Flex>
      <Flex>
        <Text>{text}</Text>
      </Flex>
    </>
  );
};

const AboutPage = () => {
  return (
    <Flex
      direction={"column"}
      maxW={"100vw"}
      minH={"100vh"}
      bg={"brand.bgGradient"}
    >
      <Navbar showNav />
      <Flex mt={"36"} px={["20", "10", "20"]} width="full" direction={"column"}>
        <Flex w="full" justify={"flex-end"}>
          <Heading
            fontSize={["4xl", "7xl", "8xl", "9xl"]}
            color={"brand.lightGreen"}
            fontWeight={"900"}
            opacity={".05"}
            position="fixed"
            mr={"8"}
          >
            About Me.
          </Heading>
        </Flex>
        <Flex px={["0", "2", "2"]} w="full" direction={"column"}>
          {content.map((content) => (
            <ContentSection key={content.title} content={content} />
          ))}
          <Flex my={"4"}>
            <RouterLink to="/projects">
              <SeeMoreSection
                setIsShown={() => null}
                isShown={false}
                text={"my projects"}
              />
            </RouterLink>
          </Flex>
          <Flex my={"8"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutPage;
