import { Button } from "@chakra-ui/react"
import { CaixaTexto, DivPostar } from "../../pages/post/styled"
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constantes";

export const CreatePostCard=()=>{

    const context = useContext(GlobalContext);

    const { posts, fetchPosts } = context
  
        const [isLoading, setIsLoading] = useState(false)
        const [isContentValid, setIsContentValid] = useState(true)
  
        const [form, onChangeInputs, clearInputs] = useForm({
          content: ""
        })
        
        const createPost = async () => {
          try {
            setIsLoading(true)
            const token = window.localStorage.getItem("user.token");
            const config = {
              headers: {
                Authorization: token
              }
            }
            const body = {
              content: form.content,
            }
      
            isContentValid && await axios.post(BASE_URL + "posts", body, config)
            setIsLoading(false)
            clearInputs()
            window.alert("Post criado com sucesso!")
            fetchPosts()
          } catch (error) {
            setIsLoading(false)
            console.error(error?.response)
            window.alert(error?.response?.data)
          }
        }
  
        // const onSubmit = () => {
        //   setIsContentValid(validateText(form.content))
        // }


    return (
        
      <DivPostar>
      <form onSubmit={createPost}>
        <CaixaTexto
          placeholder="Escreva seu Post..."
          name="content"
          value={form.content}
          onChange={onChangeInputs}
          required
        />

        <Button
        mt={5}
          w={60}
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
          Postar
        </Button>
      </form>
    </DivPostar>
    )
}