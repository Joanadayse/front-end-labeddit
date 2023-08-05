import { Header } from "../../components/Header";
import { CenterPageContainer } from "../../components/styled-containers";
import { PostCard } from "../../components/card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constantes";
import { CardComments } from "../../components/cardComents/CardComments";
import { CreateCommentCard } from "../../components/createCommentCard/CreateCommentCard";

export const DetailsPage = () => {
  const params = useParams();

  const [comments, setComments] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("user.token");

    if (token) {
      fetchCurrentPost();
      fetchComments();
    }
  }, []);

  const fetchCurrentPost = async () => {
    try {
      setIsLoading(true);

      const token = window.localStorage.getItem("user.token");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.get(BASE_URL + `posts/${params.id}`, config);
      setCurrentPost(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert("Erro ao buscar o post!");
    }
  };

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const token = window.localStorage.getItem("user.token");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.get(
        BASE_URL + `comments/${params.id}`,
        config
      );
      setComments(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response);
      window.alert("Erro ao buscar os comentários!");
    }
  };

  const handleLike = (id) => {
    const body = {
      like: true,
    };
    likeDislikeComment(id, body);
    setLiked(!liked);
    setDisLiked(disliked);
  };

  const handleDislike = (id) => {
    const body = {
      like: false,
    };
    likeDislikeComment(id, body);
    setDisLiked(!disliked);
    setLiked(liked);
  };
  const likeDislikeComment = async (id, body) => {
    try {
      const token = window.localStorage.getItem("user.token");
      const config = {
        headers: {
          Authorization: token,
        },
      };

      await axios.put(BASE_URL + `comments/${id}/like`, body, config);
    } catch (error) {
      console.error(error?.response);
      window.alert(error?.response?.data);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [liked, disliked]);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CenterPageContainer>
      <Header />

      <PostCard isLoading={isLoading} post={currentPost} />

      <CreateCommentCard fetchComments={fetchComments} />

      {comments &&
        comments?.map((comment) => {
          return (
            <CardComments
              key={comment.id}
              comment={comment}
              handleLike={handleLike}
              handleDislike={handleDislike}
              liked={liked}
              path={"comments"}
              disliked={disliked}
              likeDislikeComment={likeDislikeComment}
              isLoading={isLoading}
            />
          );
        })}
    </CenterPageContainer>
  );
};
