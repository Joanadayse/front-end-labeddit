import styled from "styled-components";

export const ContainerLogin = styled.div`
  /* background-color: red; */

  width: 60vh;
  height: 90vh;
  margin: 0 auto;
  padding: 5%;
  display: block;
  align-items: center;
  justify-content: center;
  .div-buton {
    width: 80%;
    display: block;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    .div-buton {
      margin-left: 13%;
    }
  }
`;

export const ImageLine = styled.img`
  width: 100%;
  padding: 20px;
  /* background-color: aqua; */
`;

export const Logo = styled.img`
  margin: 0 auto;
  margin-top: 80px;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 60px;
`;

export const Input = styled.input`
  width: 363px;
  height: 60px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  padding: 20px;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  width: 365px;
  height: 51px;
`;
