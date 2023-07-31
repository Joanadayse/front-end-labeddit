import { useForm } from "../../hooks/useForm";
import { Paragrafo } from "./styled";
import { Button, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import {
  CenterPageContainer,
  FormContainer,
} from "../../components/styled-containers";
import { Header } from "../../components/Header";
import { EmailInput, NameInput, PasswordInput } from "../../components";
import {
  signup,
  validateEmail,
  validateName,
  validatePassword,
} from "../../constantes";
import { goToLoginPage, goToPostsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
const navigate= useNavigate()

  const [ form, onChangeInputs, clearFields ] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const onSubmit = async(event) => {
    event.preventDefault()
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setIsNameValid(validateName(form.name));
   
   
    try {
      const {token} =
      setIsNameValid &&
        setIsEmailValid &&
        setIsPasswordValid &&
        (await signup({
          name:form.name,
          email: form.email,
          password: form.password,
        }));
      // console.log(response);
      localStorage.setItem("user.token",token)
      goToLoginPage(navigate)
    } catch (e) {
      alert(e.response.data.message)
    }

    clearFields();
  };

  return (
    <CenterPageContainer>
      <Header />

      <Paragrafo>Olá, boas vindas ao LabeEddit :D</Paragrafo>

      <FormContainer onSubmit={onSubmit} >
        <NameInput value={form.name} onChange={onChangeInputs} isValid={isNameValid} />

        <EmailInput value={form.email} onChange={onChangeInputs} isValid={isEmailValid} />

        <PasswordInput
          value={form.password}
          onChange={onChangeInputs}
          isValid={isPasswordValid}
        />

        <p className="paragrafo">
          Ao continuar você concorda com o nosso
          <span>Contrato de usuario</span> e nossa
          <span>Politica de Privacidade</span>
        </p>
        <Checkbox>
          Eu concordo em receber emails sobre coisas leais da LabeEddit{" "}
        </Checkbox>

        <Button
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
      </FormContainer>
    </CenterPageContainer>
  );
};
