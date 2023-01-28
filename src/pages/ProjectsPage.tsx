import { AspectRatio, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import netchatVideo from "../assets/netchat.mp4";
import { useMemo, useState } from "react";
import { toTitleCase } from "../utils/formatText";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

interface IProject {
  id: number;
  name: string;
  description: string;
  githubUrl?: string[];
  liveUrl?: string;
  tags?: string[];
  preview?: { type: string; path: string };
}

const projects: IProject[] = [
  {
    id: 1,
    name: "Game of Life",
    description:
      "Game of Life is an example of cellular automaton and zero player game. It is played on a 2D grid with the purpose of defining an interesting and unpredictable cellular automaton",
    githubUrl: ["https://github.com/dannywamuya/game-of-life"],
    liveUrl: "https://dannywamuya.github.io/game-of-life/",
    tags: ["javascript", "typescript", "react", "html", "css3"],
    preview: { type: "mp4", path: netchatVideo },
  },
  {
    id: 2,
    name: "Netchat v1",
    description:
      "Netchat is a unix terminal based server-client chat application using the TCP protocol. It supports real-time, multi client-server communication.",
    githubUrl: ["https://github.com/dannywamuya/netchat"],
    tags: ["c++", "Network Programming"],
    preview: { type: "mp4", path: netchatVideo },
  },
  {
    id: 3,
    name: "Netchat v1",
    description:
      "Netchat is a unix terminal based server-client chat application using the TCP protocol. It supports real-time, multi client-server communication.",
    githubUrl: ["https://github.com/dannywamuya/netchat"],
    tags: ["c++", "Network Programming"],
    preview: { type: "mp4", path: netchatVideo },
  },
  {
    id: 4,
    name: "Netchat v1",
    description:
      "Netchat is a unix terminal based server-client chat application using the TCP protocol. It supports real-time, multi client-server communication.",
    githubUrl: ["https://github.com/dannywamuya/netchat"],
    tags: ["c++", "Network Programming"],
    preview: { type: "mp4", path: netchatVideo },
  },
  {
    id: 5,
    name: "Netchat v1",
    description:
      "Netchat is a unix terminal based server-client chat application using the TCP protocol. It supports real-time, multi client-server communication.",
    githubUrl: ["https://github.com/dannywamuya/netchat"],
    tags: ["c++", "Network Programming"],
    preview: { type: "mp4", path: netchatVideo },
  },
];

const videoStyles = {
  borderRadius: "5px",
  boxShadow: "10px 10px black",
  filter: "grayscale(0.6)",
  transition: "all 0.5s ease-in-out",
};

const videoHoverStyles = {
  borderRadius: "5px",
  boxShadow: "15px 15px black",
  filter: "saturate(1.7)",
  transform: "scale(1.02)",
  transition: "all 0.5s ease-in-out",
};

const ProjectItem = ({
  project: { description, name, githubUrl, id, liveUrl, preview, tags },
}: {
  project: IProject;
}) => {
  const isEven = useMemo(() => id % 2 === 0, [id]);
  const [styles, setStyles] = useState(videoStyles);

  return (
    <Flex my="4" align={"center"} direction={isEven ? "row" : "row-reverse"}>
      {/* Details */}
      <Flex
        direction={"column"}
        w="full"
        align={isEven ? "flex-start" : "flex-end"}
      >
        <Text my={"2"} color={"brand.lightGreen"} fontSize="lg">
          {name}
        </Text>
        <Flex
          direction={"column"}
          h="100%"
          bg={"brand.altMain"}
          borderRadius={"md"}
          p={"4"}
          mr={isEven ? "-8" : "0"}
          ml={!isEven ? "-8" : "0"}
          zIndex={"50"}
          w="fit-content"
          textAlign={isEven ? "start" : "end"}
        >
          <Text>{description}</Text>
        </Flex>
        <Flex
          w={"full"}
          wrap={"wrap"}
          gap={"2"}
          my={"3"}
          justify={isEven ? "flex-start" : "flex-end"}
          align={"center"}
        >
          {tags && tags?.length > 0
            ? tags.map((tag, index) => (
                <Flex py={"1"} px={"2"} bg={"brand.white"} borderRadius={"lg"}>
                  <Text key={index} color={"brand.bgMain"} fontSize={"sm"}>
                    {toTitleCase(tag)}
                  </Text>
                </Flex>
              ))
            : null}
        </Flex>
        <Flex gap={"2"}>
          {liveUrl ? (
            <Link href={liveUrl} target={"_blank"}>
              <Icon
                as={AiOutlineLink}
                boxSize={"24px"}
                color={"brand.mainColor"}
              />
            </Link>
          ) : null}
          {githubUrl && githubUrl?.length > 0
            ? githubUrl.map((url, index) => (
                <Link href={url} key={index} target={"_blank"}>
                  <Icon
                    as={FaGithub}
                    boxSize={"24px"}
                    color={"brand.mainColor"}
                  />
                </Link>
              ))
            : null}
        </Flex>
      </Flex>
      {/* Preview */}
      {preview && preview.path && preview.type ? (
        <Flex
          minW={"50%"}
          direction={"column"}
          zIndex={"49"}
          cursor={"pointer"}
        >
          <AspectRatio w="full" ratio={16 / 9}>
            <video
              src={preview.path}
              autoPlay
              muted
              loop
              style={{ ...styles }}
              onMouseEnter={() => setStyles(videoHoverStyles)}
              onMouseLeave={() => setStyles(videoStyles)}
            />
          </AspectRatio>
        </Flex>
      ) : null}
    </Flex>
  );
};

const ProjectsPage = () => {
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
            My Projects.
          </Heading>
        </Flex>
        <Flex direction={"column"} h="100%">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Flex>
        <Flex my={"8"} />
      </Flex>
    </Flex>
  );
};

export default ProjectsPage;
