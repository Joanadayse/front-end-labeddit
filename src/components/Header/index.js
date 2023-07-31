import { DivHeader } from "./styled";
import logo from "../../assests/logo-smal.png";
import { goToLoginPage, goToPostsPage } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const location= useLocation()
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  // const handleClick = (e) => {
  //   setLoggedIn(!loggedIn);
  // };
  const delogar=()=>{
    window.localStorage.removeItem("user.token")
    goToLoginPage(navigate)
  }

  const handButton=()=>{
    switch (location.pathname) {
      case "/signup":
        return (
          <>
           <img src={logo} />
           <button onClick={() => goToLoginPage(navigate)}>login</button>
          </>
        )
        
    case "/":
      return  <button onClick={delogar}>logount</button>
      default:
        return(
          <>
          
          <button onClick={() => goToPostsPage(navigate)}>voltar</button>
          <img src={logo} />
          <button onClick={delogar}>logount</button>
          
          </>
        )
    }
  }

  return (
    <DivHeader>
          {handButton()}
      
  

      {/* {loggedIn ? (
        <button onClick={() => goToLoginPage(navigate)}>login</button>
      ) : (
        <button onClick={() => goToLoginPage(navigate)}>logount</button>
      )} */}
    </DivHeader>
  );
};
