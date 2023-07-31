import { useForm } from "../../hooks/useForm";
import logo from "../../assests/logo.png";
import line from "../../assests/line.png";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { validateEmail, validatePassword } from "../../constantes";
import {
  CenterPageContainer,
  FormContainer,
} from "../../components/styled-containers";
import { EmailInput, Header, PasswordInput } from "../../components";
import { HeaderDiv, ImageLine } from "./styled";
import { goToPostsPage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { login } from "../../constantes";

export const LoginPage = () => {
  const [form, onChangeInputs, clearFields] = useForm({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log("Login Realizado com sucesso!", form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));

    // let response;
    try {
      const {token} =
        setIsEmailValid &&
        setIsPasswordValid &&
        (await login({
          email: form.email,
          password: form.password,
        }));
      window.localStorage.setItem("user.token",token)
       goToPostsPage(navigate)

      // console.log(response);
    } catch (e) {
      alert(e.response.data.message)
    }

    clearFields();
  };

  return (
    <CenterPageContainer>
      <HeaderDiv>
        <img src={logo} />
        <p>O projeto de rede social da Labenu</p>
      </HeaderDiv>

      <FormContainer onSubmit={onSubmit}>
        <EmailInput
          value={form.email}
          onChange={onChangeInputs}
          isValid={isEmailValid}
        />

        <PasswordInput
          value={form.password}
          onChange={onChangeInputs}
          isValid={isPasswordValid}
        />

        <Button
          // onSubmit={Login}
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
          
        >
          continuar
        </Button>

       
        <img src={line} alt="line" />
        
        <Button
          borderColor="#FE7E02"
          border="2px"
          p={6}
          borderRadius="20px"
          variant="form"
          type="submit"
          boxShadow={"lg"}
          bg={"white"}
          color={"#FE7E02"}
          _hover={{
            bg: "#A8BBC6",
          }}
          onClick={() => goToSignupPage(navigate)}
        >
          criar conta
        </Button>
      </FormContainer>
    </CenterPageContainer>
  );
};
