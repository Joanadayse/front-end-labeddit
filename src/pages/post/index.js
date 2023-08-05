import { Header } from "../../components/Header";
import { PostCard } from "../../components/card";
import { CenterPageContainer } from "../../components/styled-containers";
import {
  DivComentarios,
  DivLine
} from "./styled";
import line from "../../assests/line.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constantes";
import { GlobalContext } from "../../context/GlobalContext";
import { CreatePostCard } from "../../components/createPostCard/CreatePostCard";
import { PostContext } from "../../context/PostContext";

export const PostsPage = () => {
  const context = useContext(GlobalContext)
  const { posts, fetchPosts } = context

  useEffect(() => {
    const token = window.localStorage.getItem("user.token")
    if (token) {
      fetchPosts()
    }
  }, [])
  const [ liked, setLiked ] = useState(false)
  const [ disliked, setDisLiked ] = useState(false)
 
  
  const handlePostLike = (id) => {
      const body = {
          like: true
      }
      likeDislikePost(id,body)
      setLiked(!liked)
      setDisLiked(disliked)
    }

    const handlePostDislike = (id) => {
      const body = {
          like: false
      }
      likeDislikePost(id, body)
      setDisLiked(!disliked)
      setLiked(liked)
      }

    const likeDislikePost = async (id, body) => {
      try {

        const token = window.localStorage.getItem("user.token");

        const config = {
          headers: {
            Authorization: token
          }
        }
      
        await axios.put(BASE_URL + `posts/${id}/like`, body, config)
 
      } catch (error) {
        console.error(error?.response)
      }
    }    
  
    useEffect(() => {
      fetchPosts()
     }, [ liked, disliked ])  
    const postContext ={
      handlePostLike,
      handlePostDislike
    }
 
    
  return (
    <PostContext.Provider value={postContext}>
      <CenterPageContainer>
      <Header />
      <CreatePostCard />

      <DivLine>
        <img src={line} />
      </DivLine>

      <DivComentarios>
        {posts && posts.map((post)=>{
          return <PostCard
          key={post.id} post={post} handlePostLike={handlePostLike} handlePostDislike={handlePostDislike} liked={liked} disliked={disliked} 
        />
        })  
        }
      </DivComentarios>
    </CenterPageContainer>

    </PostContext.Provider>
  );
};
