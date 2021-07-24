import React from "react";
import styled from "styled-components";
import history from "../config/history";

type Nav = { title: string; link: string };

const menu: Array<Nav> = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Lista de Desejos",
    link: "/",
  },
  {
    title: "Entrar",
    link: "/admin",
  },
];

const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Container>
        <Title onClick={() => history.push("/")}>Lojas Fictícia</Title>
        <MenuNav>
          {menu.map((item) => (
            <ItemNav href={item.link}>{item.title}</ItemNav>
          ))}
        </MenuNav>
      </Container>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div`
  width: 100%;
  background: linear-gradient(#383637, #646263);
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 15px;
`;
const Title = styled.header`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;
const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;
const ItemNav = styled.a`
  margin: 0 20px 0 20px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
