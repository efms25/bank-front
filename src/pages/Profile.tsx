import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useContext } from 'react'
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import {AppContext} from "../components/AppContext"

function Profile() {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext)

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo mainContent="Nome" content={userData ? userData.name : ""} />
        <CardInfo mainContent="Email" content={userData ? userData.email : ""}  />
        <Box>
          <Button onClick={() => navigate("/conta/1")} name="Conta" />
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Profile;
