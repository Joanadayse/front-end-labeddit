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
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { TOKEN_NAME } from "../../constantes";
import { goToLoginPage } from "../../routes/coordinator";
import axios from "axios";

export const PostsPage = () => {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  // const { post, fetchPost } = context;
  const [isLoading, setIsloading] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [post, setPost]= useState([])

  useEffect(() => {
    // const token = window.localStorage.getItem(TOKEN_NAME);
    // if (!token) {
    //   goToLoginPage(navigate);
    // } else {
    //   fetchPost();
    // }

    // fetchPost()


  });

  const onChange=(e)=>{
    e.preventDefault();
    setPostContent(e.target.value)
    console.log(postContent)

  }

  const createPost = async (e) => {
    e.preventDefault();

    setIsloading(true);

    try {
      const token = localStorage.getItem("user.token");
     

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const body = {
        content: postContent,
      };

      await axios.post("http://localhost:3003/posts", body, config);

      // setPostContent("");
      setIsloading(false);
      // fetchPost();
    } catch (error) {
      console.log(error)
      // console.error(error?.response?.data);
      // window.alert(error?.response?.data);
    }
  };

  const adicionarPost=()=>{
    if (postContent.length < 3) {
      return alert("É necessário escrever mais de 3 caracteres");
    }
    const novoPost = [...post, postContent];
    setPost(novoPost);
    setPostContent("");
  }


  console.log(postContent)

  return (
    <CenterPageContainer>
      <Header />

      <DivPostar>
      <form onSubmit={createPost}>
          <CaixaTexto 
          placeholder="Escreva seu Post..." 
          value={postContent}
          // onChange={(e)=> setPostContent(e.target.value) }
        onChange={onChange}
/>
</form>

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
            onClick={adicionarPost}

            // disabled={isLoading}
          >
            Postar
          </Button>
      
      </DivPostar>

      <DivLine>
        <img src={line} />
      </DivLine>

      <DivComentarios>
        {post.map((posts,indice)=>{
          return <PostCard key={indice} posts={posts} />
        })}
        {/* {postContent} */}
      </DivComentarios>
    </CenterPageContainer>
  );
};
