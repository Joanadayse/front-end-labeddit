import { Router } from "./routes";
import { ChakraProvider} from "@chakra-ui/react";
import { theme } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constantes";
import { GlobalContext } from "./context/GlobalContext"


export default function App() {
  const [ posts, setPosts ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ liked, setLiked ] = useState(false)
  const [ disliked, setDisLiked ] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem("user.token")

    if (token) {
      fetchPosts()
    }
  }, [])

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const token = window.localStorage.getItem("user.token")
      const config = {
        headers: {
          Authorization: token
        }
      }
      const response = await axios.get(BASE_URL + "posts", config)
      setPosts(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
  }
  
  const context = { posts, fetchPosts, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn }
  return (
    <>
      <ChakraProvider theme={theme}>
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
      </ChakraProvider>
    </>
  );
}
