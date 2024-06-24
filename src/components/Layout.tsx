import { Box } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <Box
      minHeight="100vh"
      background="linear-gradient(129deg, rgba(251,195,3,0.05) 0%, rgba(255,223,0,0.05) 100%)"
    >
      <Header />
      <Box padding="25px">{children}</Box>
      <Footer />
    </Box>
  );
};
