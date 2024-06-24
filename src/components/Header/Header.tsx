import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { changeLocalStorage } from "../../services/storage";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import "./Header.css";

interface IHeader {
  title?: String;
}

export const Header = ({ title = "Dio Bank" }: IHeader) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex
      bg="linear-gradient(129deg, rgba(251,132,3,1) 0%, rgba(255,77,0,1) 100%)"
      alignItems={"center"}
      w="100%"
      justifyContent={"space-between"}
      paddingX="16px"
    >
      <Box p="16px">
        <Text fontSize={24} fontWeight={800} color="#FFF">
          {title}
        </Text>
      </Box>
      {isLoggedIn && (
        <Box>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </Box>
      )}
    </Flex>
  );
};
