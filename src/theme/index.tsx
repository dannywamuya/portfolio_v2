import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      mainBg: "#022b3a",
      mainColor: "#43c2fd",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand.mainColor",
        fontSize: "16px",
      },
      variants: {
        link: {
          fontSize: "14px",
        },
      },
    },
  },
});

export default theme;
