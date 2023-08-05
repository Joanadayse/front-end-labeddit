import styled, { keyframes } from "styled-components";

export const CenterPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
width: 428px;
  min-height: 700px;
  margin: 0 auto;
  align-items: center;
  /* background-color: red; */

  p,span{
      text-align: center;
    }






`;

export const CaixaComentarios= styled.div`
/* background-color: beige; */
width: 40vh;
height: 150px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 10px;
border-width: 2px;
cursor: pointer;
transition: 0.5s;
:hover{
  transform: scale(1.1);
  cursor: pointer;
}

p{
  margin-left: 10px;
  margin-top: 10px;
}




`

export const DivIcons= styled.div`
display: flex;
gap: 20px;
border-width: 2px;
width: 50%;
border-radius: 20px;
align-items: center;
cursor: pointer;
margin-top: 20px;
margin-left: 10px;

transition: 0.5s;
:hover{
  transform: scale(1.1);
  cursor: pointer;
}

`

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;
export const Buttonn = styled.button`
  width: 350px;
  font-family: "Noto Sans";
  height: 56px;
  border-radius: 27px;
  padding: 13px 133px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 18px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  transition: background 300ms ease-out;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #f9b24e 0%, #ff6489 100%);
  }

  &:active {
    animation-name: ${clickAnimation};
    animation-duration: 300ms;
    animation-timing-function: ease-out;
  }
`;