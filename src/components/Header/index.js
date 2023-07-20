import { DivHeader } from "./styled";
import logo from "../../assests/logo-smal.png";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const handleClick = (e) => {
    setLoggedIn(!loggedIn);
  };

  return (
    <DivHeader>
      <img src={logo} />

      {loggedIn ? (
        <button onClick={() => goToLoginPage(navigate)}>login</button>
      ) : (
        <button onClick={() => goToLoginPage(navigate)}>logount</button>
      )}
    </DivHeader>
  );
};
