import React from "react";
import { Button as CButton } from "@chakra-ui/react";
import { MouseEventHandler } from "react"

interface IButton {
  name?: string;
  onClick: MouseEventHandler;
  bg?: string;
}

function Button({
  name = "Enviar",
  onClick,
  bg = "rgba(251,132,3,1)",
}: IButton) {
  return (
    <CButton
      onClick={onClick}
      bg={bg}
      _hover={{ bg: "#e27705" }}
      _active={{ bg: "#c96b07" }}
      w="100%"
      color="#FFF"
    >
      {name}
    </CButton>
  );
}

export default Button;
