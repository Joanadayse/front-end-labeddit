import { Icon } from "@chakra-ui/react"
import { CaixaComentarios, DivIcons } from "../styled-containers"
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import axios from "axios"


export const PostCard=({content,id,name,like,dislikes,pegarPosts})=>{

const navigate= useNavigate()

const likePost = async (e,postId) => {
    e.stopPropagation()
    try {
      const body = {
        like: true,
      };
      await axios.put(`https://labeddit-jd.onrender.com/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("user.token"),
        },
      });
      pegarPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async (e,postId) => {
    e.stopPropagation()
    try {
      const body = {
        like: false,
      };
      await axios.put(`https://labeddit-jd.onrender.com/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("user.token"),
        },
      });
      pegarPosts();
    } catch (error) {
      console.log(error);
    }
  };

    return(
        <CaixaComentarios onClick={()=>goToDetailsPage(navigate,id)} >
        
        <p>Enviado por:{name}</p>
        <p>{content}</p>

    
        <DivIcons>
        <Icon
         as={ArrowDownIcon}
          w={8} h={5}
        onClick={() => likePost(id)}
          
          />
        
        {like}
        <Icon
         as={ArrowUpIcon} 
         w={8} 
         h={5}  
        onClick={() => dislikePost(id)}
         /> 
        <Icon as={ChatIcon} w={5} h={5}  />
        </DivIcons>

     
    
    </CaixaComentarios>
    )
}