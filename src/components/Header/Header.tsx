import { Box, Flex, Text } from '@chakra-ui/react'
import './Header.css'

interface IHeader {
  title?: String
}

export const Header  = ({title = "Dio Bank"}: IHeader) => {
  return(
    <Flex  bg="linear-gradient(129deg, rgba(251,132,3,1) 0%, rgba(255,77,0,1) 100%)">
      <Box p="16px">
        <Text fontSize={24} fontWeight={800} color="#FFF">
          {title}
        </Text>
      </Box>
    </Flex>
  )
}
