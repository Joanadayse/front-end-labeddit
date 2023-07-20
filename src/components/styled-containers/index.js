import styled from "styled-components";

export const CenterPageContainer = styled.div`
  justify-content: baseline;
  height:896px;
  width: 414px;
  margin: 0 auto;
  background-color: azure;

`;

export const FormContainer = styled.form`
height: 70vh;
/* min-width: 40vw;
max-width: 95vw; */
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: beige; */
padding: 10%;
gap: 30px;

`;

export const CaixaComentarios= styled.div`
/* background-color: beige; */
width: 90%;
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




`

export const DivIcons= styled.div`
/* background-color: blue; */
display: flex;
gap: 30px;
cursor: pointer;
margin-top: 30px;

`