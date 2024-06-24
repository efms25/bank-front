import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      minHeight="120px"
      backgroundColor="#FFFFFF"
      boxShadow="0px 0px 5px 0 rgba(32,32,32,0.1)"
      borderRadius="25px"
      padding="15px"
    >
      <Text fontSize="2xl" fontWeight="bold">
        {mainContent}
      </Text>
      <Text fontSize="xl">{content}</Text>
    </Box>
  );
};

export default CardInfo;
