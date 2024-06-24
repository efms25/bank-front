import { Box, Center } from "@chakra-ui/react";
import React from "react";


export const Card = ({children}: any) => {
  return (
    <React.Fragment>
      <Box
        minHeight="100vh"
        background="linear-gradient(129deg, rgba(251,195,3,0.05) 0%, rgba(255,223,0,0.05) 100%)"
        padding="25px"
      >
        <Center>
          <Box
            backgroundColor="#FFFFFF"
            boxShadow="0px 0px 5px 0 rgba(32,32,32,0.1)"
            borderRadius="25px"
            padding="15px"
            minW={300}
            maxW={"50vw"}
          >
            {children}
          </Box>
        </Center>
      </Box>
    </React.Fragment>
  );
};
