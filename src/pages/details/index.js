import { Button } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { CenterPageContainer } from "../../components/styled-containers"
import { CaixaTexto, DivComentarios, DivPostar } from "../post/styled"
import { PostCard } from "../../components/card"

export const DetailsPage = () => {
  return(
    <CenterPageContainer>

      <Header/>

      <DivComentarios>
        <PostCard/>
      </DivComentarios>

      <DivPostar>
        <CaixaTexto/>
        <Button
         w={80}
         p={6}
         borderRadius="20px"
         variant="form"
         type="submit"
         boxShadow={"lg"}
         bg={"linear-gradient(90deg, #ff6489 0%, #f9b24e 100%)"}
         color={"white"}
         _hover={{
           bg: "#A8BBC6",
         }}
        >
          Responder
        </Button>
      </DivPostar>

      <DivComentarios>
        <PostCard/>
      </DivComentarios>
      <DivComentarios>
        <PostCard/>
      </DivComentarios>
    
    </CenterPageContainer>
  )
}