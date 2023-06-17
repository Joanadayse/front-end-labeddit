import { Router } from "./routes";
import { GlobalStyled} from "./GlobalStyles";
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from "./styles"

export default function App() {
  return (
    <>
    <GlobalStyled/>
    <ChakraProvider theme={theme}>
    <Router />
    </ChakraProvider>
   
    </>
  );
}

