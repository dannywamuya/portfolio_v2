import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import logo from "../assets/logo.png";

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
  return (
    <Flex
      width={"100%"}
      height={"max-content"}
      py={"4"}
      px={"16"}
      justify="space-between"
      align={"center"}
    >
      <Link to="/">
        <Image width={"180px"} src={logo} alt={"Danny's Logo"} />
      </Link>
      <Flex gap={"8"} align={"center"}>
        {navLinks.map((navlink, idx) => (
          <NavLink key={idx} path={navlink.path} text={navlink.text} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
