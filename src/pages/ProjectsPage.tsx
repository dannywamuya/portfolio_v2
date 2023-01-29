import { AspectRatio, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import netchatVideo from "../assets/netchat.mp4";
import golVideo from "../assets/gol.mp4";
import customUiVideo from "../assets/custom-ui.mp4";
import afrexVideo from "../assets/afrex.mp4";
import { useEffect, useMemo, useRef, useState } from "react";
import { toTitleCase } from "../utils/formatText";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import SeeMoreSection from "../components/SeeMoreSection";
import { Link as RouterLink } from "@tanstack/react-location";
import { motion } from "framer-motion";

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
    description: `Game of Life is an example of cellular automaton and zero player 
    game. It is played on a 2D grid with the purpose of defining an interesting and 
    unpredictable cellular automaton.`,
    githubUrl: ["https://github.com/dannywamuya/game-of-life"],
    liveUrl: "https://dannywamuya.github.io/game-of-life/",
    tags: ["javascript", "typescript", "react", "html", "css3"],
    preview: { type: "mp4", path: golVideo },
  },
  {
    id: 2,
    name: "Netchat v1",
    description: `Netchat is a unix terminal based server-client chat application using 
    the TCP protocol. It supports real-time, multi client-server communication.`,
    githubUrl: ["https://github.com/dannywamuya/netchat"],
    tags: ["c++", "Network Programming"],
    preview: { type: "mp4", path: netchatVideo },
  },
  {
    id: 3,
    name: "Afrex Gold Limited",
    description: `A website developed in Angular for horticulture exporting company 
    Afrex Gold with integrated backend services for mail.`,
    liveUrl: "http://www.afrexgold.com",
    tags: ["angular", "typescript", "nodejs"],
    preview: { type: "mp4", path: afrexVideo },
  },
  {
    id: 4,
    name: "Custom React Components",
    description: `Custom components is an ongoing react project that allows 
    you to customize and reuse common react components such as the DataTable 
    with all it's functionality built on top of proven react libraries. Storybook 
    integration is on the roadmap.`,
    githubUrl: ["https://github.com/dannywamuya/custom-components"],
    liveUrl: "https://customui.onrender.com/",
    tags: [
      "react",
      "typescript",
      "react-query",
      "react-table",
      "react-location",
    ],
    preview: { type: "mp4", path: customUiVideo },
  },
];

const videoStyles = {
  borderRadius: "5px",
  boxShadow: "10px 10px black",
  filter: "grayscale(0.3)",
  transition: "all 0.5s ease-in-out",
};

const videoHoverStyles = {
  borderRadius: "5px",
  boxShadow: "15px 15px black",
  filter: "saturate(1.5)",
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    }
  }, [videoRef]);

  return (
    <Flex my="8" align={"center"} direction={isEven ? "row" : "row-reverse"}>
      {/* Details */}
      <motion.div
        whileInView={{ x: !isEven ? [400, 0] : [-400, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 0.4,
        }}
        initial={{ opacity: 0 }}
        style={{ minWidth: "50%", zIndex: "50" }}
      >
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
                  <Flex
                    py={"1"}
                    px={"2"}
                    key={index}
                    bg={"brand.white"}
                    borderRadius={"lg"}
                  >
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
      </motion.div>
      {/* Preview */}
      {preview && preview.path && preview.type ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: isEven ? [400, 0] : [-400, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
          style={{ minWidth: "50%", zIndex: "49" }}
        >
          <Flex
            minW={"50%"}
            direction={"column"}
            zIndex={"49"}
            cursor={"pointer"}
          >
            <AspectRatio w="full" ratio={21 / 9}>
              <video
                ref={videoRef}
                src={preview.path}
                autoPlay
                muted
                loop
                style={videoLoaded ? { ...styles } : {}}
                onMouseEnter={() => setStyles(videoHoverStyles)}
                onMouseLeave={() => setStyles(videoStyles)}
              />
            </AspectRatio>
          </Flex>
        </motion.div>
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
        <Flex my={"4"}>
          <RouterLink to="/contact">
            <SeeMoreSection
              setIsShown={() => null}
              isShown={false}
              text={"See my contact details"}
            />
          </RouterLink>
        </Flex>
        <Flex my={"8"} />
      </Flex>
    </Flex>
  );
};

export default ProjectsPage;
