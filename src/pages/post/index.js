import { Button } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/card";
import { CenterPageContainer } from "../../components/styled-containers";
import {
  CaixaComentarios,
  CaixaTexto,
  DivComentarios,
  DivIcons,
  DivLine,
  DivPostar,
} from "./styled";
import line from "../../assests/line.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

export const PostsPage = () => {
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState(0);
  const [form, onChangeInputs, clearFields] = useForm({ content: "" });
  

  const pegarPosts = () => {
    axios
      .get("https://labeddit-jd.onrender.com/posts", {
        headers: { Authorization: localStorage.getItem("user.token") },
      })
      .then((response) => {
        setPostList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const criarPosts = (event) => {
    event.preventDefault();
    axios
      .post("https://labeddit-jd.onrender.com/posts", form, {
        headers: { Authorization: localStorage.getItem("user.token") },
      })
      .then((response) => {
        setPost(post + 1);
        clearFields()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pegarPosts();
  }, [post]);

  // console.log(postList);

  return (
    <CenterPageContainer>
      <Header />

      <DivPostar>
        <form onSubmit={criarPosts}>
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

      <DivLine>
        <img src={line} />
      </DivLine>

      <DivComentarios>
        {postList     
          .sort((atual, proximo) => {
              if (atual.likes < proximo.likes) {
                  return 1;
              } else if (atual.likes > proximo.likes) {
                  return -1;
              } else {
                  return postList;
              }
          })
        .map((post) => (
        <PostCard
        key={post.id} 
        id={post.id}
        content={post.content}
        name={post.creator.name}
        like={post.likes}
        dislike={post.dislikes}
        pegarPosts={pegarPosts}
        />
        ))}
      </DivComentarios>
    </CenterPageContainer>
  );
};
