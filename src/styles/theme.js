import {extendTheme } from '@chakra-ui/react'



export const theme = extendTheme({

  componentes:{
    Button:{
      variants:{
        form:{
          bg: "linear-gradient(90deg, #ff6489 0%, #f9b24e 100%)"
        },
      }
    }

  },
  colors:{
    black: "black"
  }

  })

