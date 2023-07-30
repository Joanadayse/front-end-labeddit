import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    LoginPage,
    SignupPage,
    PostsPage,
    DetailsPage
}from "../pages"


export  const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/posts" element={<PostsPage/>}/>
            <Route path="/details/:id" element={<DetailsPage/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}