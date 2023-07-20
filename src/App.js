import { Router } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles";


export default function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <GlobalContext.Provider value={context}> */}
          <Router />
        {/* </GlobalContext.Provider> */}
      </ChakraProvider>
    </>
  );
}
