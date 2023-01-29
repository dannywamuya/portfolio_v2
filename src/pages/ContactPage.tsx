import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import resume from "../assets/resume.pdf";
import SeeMoreSection from "../components/SeeMoreSection";
import { Link as RouterLink } from "@tanstack/react-location";

function validateEmail(email: string) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const valid = useMemo(() => {
    return {
      name: formData.name.length > 0,
      email: formData.email.length > 0 && validateEmail(formData.email),
      message: formData.message.length > 0,
    };
  }, [formData]);

  const formValid = useMemo(
    () => valid.email && valid.name && valid.message,
    [valid]
  );

  const handleFocus = (event: any) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: any) => {
    setLoading(true);
    event.preventDefault();
    // Send formData to the server or handle form submission here
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        message: false,
      });
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };

  return (
    <Flex w={"100%"} color={"brand.mainColor"} direction="column">
      <Flex align={"center"} fontSize={"sm"} mb={"8"}>
        <Text>
          Get in contact or email me directly at{" "}
          <strong style={{ borderBottom: "1px solid" }}>
            <a href="mailto:dwamuya@gmail.com"> dwamuya@gmail.com</a>
          </strong>
        </Text>
      </Flex>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          gap: "3rem",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Karla",
        }}
      >
        <FormControl>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Name"
            border={"1px"}
            borderColor={valid.name ? "brand.lightGreen" : "brand.white"}
            isInvalid={touched.name && !valid.name}
          />
        </FormControl>
        <FormControl>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Email"
            border={"1px"}
            borderColor={valid.email ? "brand.lightGreen" : "brand.white"}
            isInvalid={touched.email && !valid.email}
          />
        </FormControl>
        <FormControl>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Message"
            border={"1px"}
            borderColor={valid.message ? "brand.lightGreen" : "brand.white"}
            isInvalid={touched.message && !valid.message}
          />
        </FormControl>
        <Button
          mt={3}
          type="submit"
          variant={"outline"}
          borderColor={"brand.lightGreen"}
          color={"brand.lightGreen"}
          fontWeight={"medium"}
          _hover={{
            bg: "brand.lightGreen",
            fontWeight: "bold",
            color: "brand.mainBg",
          }}
          isDisabled={!formValid}
          isLoading={loading}
        >
          Submit
        </Button>
      </form>
      {success ? (
        <Flex
          mt={3}
          w={"full"}
          justify={"center"}
          direction={"column"}
          align={"center"}
        >
          <Text color={"brand.lightGreen"}>Thank you!</Text>
          <Text color={"brand.lightGreen"}>
            I'll get back to you as soon as possible.
          </Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

const ContactPage = () => {
  return (
    <Flex
      direction={"column"}
      maxW={"100vw"}
      minH={"100vh"}
      bg={"brand.bgGradient"}
    >
      <Navbar showNav />
      <Flex
        mt={"36"}
        px={["20", "10", "20"]}
        width="full"
        direction={"column"}
        align="center"
        h={"full"}
      >
        <Flex w="full" justify={"flex-end"}>
          <Heading
            fontSize={["4xl", "7xl", "8xl", "9xl"]}
            color={"brand.lightGreen"}
            fontWeight={"900"}
            opacity={".05"}
            position="fixed"
            mr={"8"}
          >
            Contact Me.
          </Heading>
        </Flex>
        <Flex h={"full"} align={"center"} w={"full"}>
          <Flex w={"50%"}>
            <ContactForm />
          </Flex>
          <Flex direction={"column"} align={"center"} gap={"16"}>
            <Text textAlign={"center"} w={"70%"}>
              I am currently available for full-time positions in Frontend or
              Full-Stack Development either remote or on-site. I am based in
              <strong> Nairobi, KE.</strong>
            </Text>
            <Text>Download my résumé below.</Text>
            <Link href={resume} download="Daniel Wamuya Resume.pdf">
              <Button
                fontFamily={"Karla"}
                w="fit-content"
                mt={4}
                type="submit"
                variant={"outline"}
                borderColor={"brand.lightGreen"}
                color={"brand.lightGreen"}
                fontWeight={"medium"}
                _hover={{
                  bg: "brand.lightGreen",
                  fontWeight: "bold",
                  color: "brand.mainBg",
                }}
              >
                Résumé
              </Button>
            </Link>
            <Flex my={"4"}>
              <RouterLink to="/">
                <SeeMoreSection
                  setIsShown={() => null}
                  isShown={false}
                  text={"Go back home"}
                />
              </RouterLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactPage;
