import { Flex, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

function SeeMoreSection({
  setIsShown,
  isShown,
  text,
}: {
  setIsShown: (arg: boolean) => any;
  isShown: boolean;
  text: string;
}) {
  return (
    <Flex
      align={"center"}
      gap={"4"}
      cursor={"pointer"}
      onClick={() => setIsShown(!isShown)}
    >
      <Text color={"brand.white"} borderBottom={"1px solid"}>
        {text}
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
          icon={isShown ? <HiOutlineArrowSmLeft /> : <HiOutlineArrowSmRight />}
        />
      </motion.button>
    </Flex>
  );
}

export default SeeMoreSection;
