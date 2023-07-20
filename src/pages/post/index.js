import { Button, Icon, Input } from "@chakra-ui/react";
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
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listPosts } from "../../constantes";

export const PostsPage = () => {
  const [postContent, setPostContent] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    listPosts()
      .then((data) => {
        console.log(data)
        setPost(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <CenterPageContainer>
      <Header />

      <DivPostar>
        {/* <form onSubmit={createPost}> */}
        <CaixaTexto
          placeholder="Escreva seu Post..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          // onChange={onChange}
        />
        {/* </form> */}

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
          // onClick={adicionarPost}

          // disabled={isLoading}
        >
          Postar
        </Button>
      </DivPostar>

      <DivLine>
        <img src={line} />
      </DivLine>

      <DivComentarios >
        {post.map((posts, indice) => {
          return <PostCard key={indice} posts={posts} />;
        })}
      </DivComentarios>
    </CenterPageContainer>
  );
};
