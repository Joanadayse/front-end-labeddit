import styled from "styled-components";

export const CenterPageContainer = styled.div`
  /* justify-content: baseline; */
  /* height:926px; */
  /* height:100vh; */
  /* max-height: 70vh; */
  /* width: 428px; */
  width: 90%;
  /* max-width: 70vw; */
  margin: 0 auto;
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  /* background-color: azure; */

`;

export const FormContainer = styled.form`
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10%;
gap: 20px;

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




`

export const DivIcons= styled.div`
display: flex;
gap: 20px;
border-width: 2px;
width: 50%;
border-radius: 20px;
align-items: center;
cursor: pointer;
margin-top: 30px;
transition: 0.5s;
:hover{
  transform: scale(1.1);
  cursor: pointer;
}

`