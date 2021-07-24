import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <FooterBar>
        <Contacts>
          <FooterTitle>Fale Conosco</FooterTitle>
          <span> Telefones: (11)2255-2255, (11)2255-2255, (11)2255-2255</span>
          <span>Email:lojasficticia@ficticia.com.br sac@ficticia.com.br</span>
          <span>Twiter: @Ficticia Instagram:@Ficticia</span>
        </Contacts>
        <Adresses>
          <FooterTitle>Nossas Lojas</FooterTitle>
          <address>Rua Loren Loren nº36 loja A , Ipsum</address>
          <address>Rua Loren Loren nº36 loja A, Ipsum </address>
          <address>Rua Loren Loren nº36 loja A, Ipsum</address>
        </Adresses>
        © Copyright 2021
      </FooterBar>
    </>
  );
};

export default Footer;

const FooterBar = styled.footer`
  background: linear-gradient(#646263, #383637);
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Contacts = styled.div`
  background-color: transparent;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  margin: 15px;
  gap: 0.5rem;
`;

const Adresses = styled(Contacts)``;
const FooterTitle = styled.p`
  color: #f75b30;
  margin: 5px 0 20px 0;
  border-bottom: 1px solid #fff;
`;
