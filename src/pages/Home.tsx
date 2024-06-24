import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import Button from "../components/Button/Button";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, pass: string) => {
    let loggedIn = await login(email, pass);
    if (loggedIn?.login) {
      setIsLoggedIn(true);
      changeLocalStorage(loggedIn);
      navigate("/conta/1");
    } else return alert("Email ou senha estão inválidos");

  };

  return (
    <Box>
      <Card>
        <>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" marginY={"10px"} value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input placeholder="password" marginY={"10px"} value={pass} onChange={(event) => setPass(event.target.value)}/>
          <Center marginY="20px">
            <Button onClick={() => validateUser(email, pass)} />
          </Center>
        </>
      </Card>
      
    </Box>
  );
};

export default Home;
