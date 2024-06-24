import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import Button from "../components/Button/Button";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    let loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Email inválido");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/1");
  };

  return (
    <Box padding="25px">
      <Card>
        <>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" marginY={"10px"} value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input placeholder="password" marginY={"10px"} />
          <Center marginY="20px">
            <Button onClick={() => validateUser(email)} />
          </Center>
        </>
      </Card>
      
    </Box>
  );
};

export default Home;
