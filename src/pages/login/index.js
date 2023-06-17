import logo from "./logo.png";
import Line from "./line.png";
import { ContainerLogin, Formulario, Input, Button, Logo, ImageLine } from "./styled";

export const LoginPage = () => {
  return (
    <ContainerLogin>
        <Logo src={logo} />   
       <p>O projeto de rede social da Labenu</p>   

      <Formulario>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
      </Formulario>

      <div className="div-buton">
      <Button>Continuar</Button>
      <ImageLine src={Line}/>
      <Button>Criar uma conta!</Button>

      </div>

    
    </ContainerLogin>
  );
};
