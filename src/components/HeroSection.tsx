import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoCall } from "react-icons/io5";
import { BsFileCodeFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-location";
import SeeMoreSection from "./SeeMoreSection";

const otherSections = [
  {
    icon: <FiMoreHorizontal />,
    text: "About",
  },
  // {
  //   icon: <MdOutlineWork />,
  //   text: "Work",
  // },
  {
    icon: <BsFileCodeFill />,
    text: "Projects",
  },
  {
    icon: <IoCall />,
    text: "Contact",
  },
];

const ContentSection = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <Link to={`/${text.toLowerCase()}`}>
      <Button
        aria-label={`Navigate to ${text}`}
        leftIcon={icon}
        fontSize={"13px"}
        size={"sm"}
        fontFamily={"Roboto Mono"}
        borderColor={"brand.lightGreen"}
        color={"brand.lightGreen"}
        bg={"transparent"}
        fontWeight={"medium"}
        variant={"outline"}
        _hover={{
          bg: "brand.lightGreen",
          color: "brand.mainBg",
          fontWeight: "bold",
          borderColor: "brand.lightGreen",
        }}
      >
        {text}
      </Button>
    </Link>
  );
};

const HeroSection = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Flex
      justify={"center"}
      h={"100%"}
      w={"100%"}
      direction={"column"}
      px={["10", "10", "20"]}
    >
      <Flex direction={"column"} gap={2}>
        <Text color={"brand.white"} fontSize={"lg"}>
          Hi, my name is,
        </Text>
        <Heading
          fontSize={["4xl", "5xl", "6xl"]}
          color={"brand.white"}
          fontWeight={"900"}
        >
          Danny Wamuya.
        </Heading>
        <Heading
          fontSize={["4xl", "5xl", "6xl"]}
          color={"brand.altMain"}
          fontWeight={"900"}
        >
          I design and build and web applications.
        </Heading>
      </Flex>
      <Flex width={["100%", "100%", "50%"]} my={"8"}>
        <Text fontSize={"lg"}>
          I’m a software engineer specializing in building and designing
          scaleable web applications.
        </Text>
      </Flex>
      <Flex gap={"8"}>
        <SeeMoreSection
          isShown={isShown}
          setIsShown={setIsShown}
          text={"See more about me"}
        />
        {isShown ? (
          <Flex>
            <motion.div
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{
                ease: "linear",
                duration: 0.3,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {otherSections.map(({ icon, text }) => (
                <ContentSection icon={icon} text={text} key={text} />
              ))}
            </motion.div>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default HeroSection;
