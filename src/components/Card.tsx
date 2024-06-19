import { Box, Center, Input } from "@chakra-ui/react"
import React from "react"
import { login } from '../services/login'
import { Header } from "./Header/Header"
import Button from './Button/Button'


export const Card = () => {
  return(
    <React.Fragment>
    <Header/>
    <Box minHeight='100vh' backgroundColor='linear-gradient(129deg, rgba(251,195,3,0.3) 0%, rgba(255,223,0,0.3) 100%)' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button onClick={login}/>
          </Center>
        </Box>
      </Box>
    </React.Fragment>
  )
}