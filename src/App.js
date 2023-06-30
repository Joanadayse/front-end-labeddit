import { Router } from "./routes";
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from "./styles"
import {GlobalContext} from "./context/GlobalContext"
import { useEffect, useState } from "react";
import { TOKEN_NAME } from "./constantes";
import axios from "axios";

export default function App() {
   const [post, setPost]= useState([])
  //  console.log(post)

   useEffect(()=>{
//  fetchPost()

    const token = localStorage.getItem("user.token");

    if(token){
      fetchPost()
    }
   })

   const fetchPost= async()=>{
        try{
            const token= localStorage.getItem("user.token")

            const config= {
              headers:{
                Authorization: token
              }
            }
            const response= await axios.get("http://localhost:3003/posts", config)

            setPost(response.data)
        }catch(error){
          console.log(error)
          // console.error(error?.response?.data);
          // window.alert(error?.response?.data)
        }


   }

  

   const context = {
    post,
    fetchPost
  };



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

