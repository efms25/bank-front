import React from 'react'
import {Button as CButton} from '@chakra-ui/react'

interface IButton {
    name?: String,
    onClick: () => void
}

function Button({name = "Enviar", onClick}: IButton) {
  return (
    <CButton onClick={onClick} bg={"rgba(251,132,3,1)"} w="100%" color="#FFF">
        {name}
    </CButton>
  )
}

export default Button