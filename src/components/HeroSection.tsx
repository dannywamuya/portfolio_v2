import { Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";
import { BsFileCodeFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-location";

const otherSections = [
  {
    icon: <FiMoreHorizontal />,
    text: "About",
  },
  {
    icon: <MdOutlineWork />,
    text: "Work",
  },
  {
    icon: <BsFileCodeFill />,
    text: "Projects",
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
      px={["20", "10", "20"]}
    >
      <Flex direction={"column"} gap={2}>
        <Text color={"brand.white"}>Hi, my name is,</Text>
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
          I’m a software engineer specializing in building and designing
          scaleable web applications.
        </Text>
      </Flex>
      <Flex gap={"8"}>
        <Flex
          align={"center"}
          gap={"4"}
          cursor={"pointer"}
          onClick={() => setIsShown(!isShown)}
        >
          <Text color={"brand.white"} borderBottom={"1px solid"}>
            See more about me
          </Text>
          <motion.button
            animate={{
              x: isShown ? [null, 0] : [0, 40, 0],
            }}
            transition={{
              ease: "linear",
              duration: isShown ? 0.2 : 2,
              repeat: isShown ? 0 : Infinity,
            }}
          >
            <IconButton
              aria-label="See more about Danny"
              color={"brand.white"}
              size={"lg"}
              variant={"unstyled"}
              icon={
                isShown ? <HiOutlineArrowSmLeft /> : <HiOutlineArrowSmRight />
              }
            />
          </motion.button>
        </Flex>
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
