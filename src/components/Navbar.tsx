import { Flex, IconButton, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link to={path}>
      <Flex align={"center"} h={"100%"} justify={"center"}>
        <Text variant={"link"}>{text}</Text>
      </Flex>
    </Link>
  );
};

const navLinks = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/work",
    text: "Work",
  },
  {
    path: "/projects",
    text: "Projects",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      width={"100%"}
      height={"max-content"}
      py={"8"}
      px={["8", "12", "20"]}
      justify="space-between"
      align={"center"}
      position={"absolute"}
    >
      <Link to="/">
        <Image width={"180px"} src={logo} alt={"Danny's Logo"} />
      </Link>
      {isLargerThan800 ? (
        <Flex gap={"8"} align={"center"}>
          {navLinks.map((navlink, idx) => (
            <NavLink key={idx} path={navlink.path} text={navlink.text} />
          ))}
        </Flex>
      ) : (
        <IconButton
          aria-label="Drop Menu Button"
          bg={"brand.mainColor"}
          size={"sm"}
          icon={<GiHamburgerMenu />}
        />
      )}
    </Flex>
  );
};

export default Navbar;
