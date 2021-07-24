import React from "react";
import styled, { keyframes } from "styled-components";
import Cards from "../../components/card";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Aquecimento</Title>
        <Banner>BLACK FRIDAY</Banner>
        <P>Nossas Promoções de aquecimento estão fervendo, venha conferir.</P>
        <Showcase>
          <Cards />
        </Showcase>
        <NewsForm
          onSubmit={(e: any) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            localStorage.setItem("email", email);
          }}
        >
          <p>Cadastre seu email e receba mais promoções exclusivas.</p>
          <EmailInput
            type="email"
            name="email"
            placeholder="Digite seu email"
          />
          <Button>Ok</Button>
        </NewsForm>
      </Container>
    </>
  );
};

export default LandingPage;
const NewsForm = styled.form`
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
`;
const Container = styled.div`
  background-color: #383637;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const P = styled.p`
  margin: 2rem 0;
  margin-top: 15vh;
  font-size: 2rem;
  width: 60%;
  text-align: center;
`;
const glow = keyframes`
 0% {
      color: #f75b30;
      text-shadow: none;
    }
    50% {
      color: #fff;
      text-shadow: 0 0 10px #f75b30, 0 0 20px #f75b30, 0 0 30px #f75b30,
        0 0 40px #f75b30, 0 0 50px #f75b30;
    }
    100% {
      color: #f75b30;
      text-shadow: none;
    }
`;
const Title = styled.div`
  color: #fff;
  font-size: 3rem;
  padding-top: 2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const Banner = styled.h1`
  height: 15vw;
  color: #f75b30;
  font-size: 10vw;
  transform: rotate(-15deg);
  line-height: 2.2em;
  font-family: "Flame";
  animation: ${glow} 5s linear infinite;
  margin: 1rem;
`;
const Showcase = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const EmailInput = styled.input`
  padding: 0.5rem;
  margin: 1rem 0;
`;
const Button = styled.button`
  background-color: #f75b30;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  height: 35px;
`;
