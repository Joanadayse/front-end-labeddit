import { Button, Icon } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import {
  CaixaComentarios,
  CenterPageContainer,
  DivIcons,
} from "../../components/styled-containers";
import { CaixaTexto, DivComentarios, DivPostar } from "../post/styled";
import { PostCard } from "../../components/card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from "@chakra-ui/icons";
import { useForm } from "../../hooks/useForm";

export const DetailsPage = () => {
  const [comentario, setComentario] = useState([]);
  const [ form, onChangeInputs ] = useForm({ content: "" });
  const params = useParams();

  useEffect(() => {
    const pegarPosts = () => {
      axios
        .get("https://labeddit-jd.onrender.com/posts", {
          headers: { Authorization: localStorage.getItem("user.token") },
        })
        .then((response) => {
          const post = response.data.find((publi) => publi.id === params.id);
          setComentario(post);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    pegarPosts();
  }, [params.id]);

  const comentarios = [
    {
      id: "Rodrigo",
      content: "Bora codar!!!",
      likes: 5,
    },
    {
      id: "Celio",
      content: "Me chama, to chegando :D~",
      likes: 30,
    },
    {
      id: "Chay",
      content: "<3",
      likes: 2,
    },
  ];

 



  return (
    <CenterPageContainer>
      <Header />

      <DivComentarios>
        <CaixaComentarios>
          <p>Enviado por:{comentario?.creator?.name}</p>
          <p>{comentario?.content}</p>

          {comentario && (
            <DivIcons>
              <Icon
                as={ArrowDownIcon}
                w={5}
                h={5}
              />
              {comentario.likes || 0}  
              <Icon
                as={ArrowUpIcon}
                w={8}
                h={5}
              />      
              <Icon as={ChatIcon} w={5} h={5} />
            </DivIcons>
          )}
        </CaixaComentarios>
      </DivComentarios>

      <DivPostar>
        <form>
          <CaixaTexto
            placeholder="Escreva seu Post..."
            name="content"
            value={form.content}
            onChange={onChangeInputs}
            required
          />

          <Button
          mt={3}
            w={60}
            p={5}
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
            adicionar comentario
          </Button>
        </form>
      </DivPostar>

      <DivComentarios>
        {comentarios.map((coment) => (
          <CaixaComentarios>
            <p>Enviado por:{coment?.creator?.name}</p>
            <p>{coment?.content}</p>

            <DivIcons>
              <Icon
                as={ArrowDownIcon}
                w={8}
                h={5}
              />
              {coment.likes}
              <Icon
                as={ArrowUpIcon}
                w={8}
                h={5}
              />
              <Icon as={ChatIcon} w={5} h={5} />
            </DivIcons>
          </CaixaComentarios>
        ))}
      </DivComentarios>
      
    </CenterPageContainer>
  );
};
