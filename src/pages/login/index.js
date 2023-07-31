import { useForm } from "../../hooks/useForm";
import logo from "../../assests/logo.png";
import line from "../../assests/line.png";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { validateEmail, validatePassword } from "../../constantes";
import {
  CenterPageContainer,
  FormContainer,
  Buttonn
} from "../../components/styled-containers";
import { EmailInput, PasswordInput } from "../../components";
import { HeaderDiv} from "./styled";
import { goToPostsPage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { login } from "../../constantes";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: inline-block;
  margin-left: 5px;
`;

export const LoginPage = () => {
  const [form, onChangeInputs, clearFields] = useForm({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setLoading(true)
    try {
      const {token} =
        setIsEmailValid &&
        setIsPasswordValid &&
        (await login({
          email: form.email,
          password: form.password,
        }));
      window.localStorage.setItem("user.token",token)
       setTimeout(() => {
        goToPostsPage(navigate)
      }, 2000);
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
            <span>Continuar</span>
          )}
        </Buttonn>

       
        <img src={line} alt="line" />
        
        <Button
          borderColor="#FE7E02"
          border="2px"
          w={80}
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
