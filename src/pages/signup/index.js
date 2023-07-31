import { useForm } from "../../hooks/useForm";
import { Paragrafo} from "./styled";
import {  Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import {
  CenterPageContainer,
  FormContainer,
  Buttonn
} from "../../components/styled-containers";
import { Header } from "../../components/Header";
import { EmailInput, NameInput, PasswordInput } from "../../components";
import {
  signup,
  validateEmail,
  validateName,
  validatePassword,
} from "../../constantes";
import { goToLoginPage} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: inline-block;
  margin-left: 5px;
`;

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
  const [loading, setLoading] = useState(false);

  const onSubmit = async(event) => {
    event.preventDefault()
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setIsNameValid(validateName(form.name));
    setLoading(true)
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
      localStorage.setItem("user.token",token)
      setTimeout(() => {
        goToLoginPage(navigate)
      }, 2000);
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
        <Checkbox px={7}>
          Eu concordo em receber emails sobre coisas leais da LabeEddit{" "}
        </Checkbox>

        <Buttonn>
          {loading ? (
            <>
              <BeatLoader
                css={override}
                size={10}
                color={"#ffffff"}
                loading={loading}
              />
            </>
          ) : (
            <span>Cadastrar</span>
          )}
        </Buttonn>
      </FormContainer>
    </CenterPageContainer>
  );
};
