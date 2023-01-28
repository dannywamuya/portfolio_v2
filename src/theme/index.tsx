import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      mainBg: "#022b3a",
      mainColor: "#43c2fd",
      white: "#DDECF3",
      altMain: "#736E91",
      lightGreen: "#21E79B",
      bgGradient:
        "linear-gradient(168deg, rgba(2,43,58,1) 68%, rgba(33,231,155,1) 100%)",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand.mainColor",
        fontSize: "16px",
        fontFamily: "Karla",
      },
      variants: {
        link: {
          fontSize: "14px",
          fontFamily: "Roboto mono",
        },
      },
    },
  },
  fonts: {
    body: "Raleway",
    text: "Karla",
  },
});

export default theme;
