import React from "react";
import styled, { keyframes } from "styled-components";
import fundoClientes from "../../assets/images/comunicacao-inclusiva.png";
import fundoEnderecos from "../../assets/images/navigation.webp";
import fundoProdutos from "../../assets/images/estoque.jpg";

const Admin: React.FC = () => {
  return (
    <>
      <AdminPage>
        <Clientes>
          <ModelTitle>Clientes</ModelTitle>
        </Clientes>
        <Endereços>
          <ModelTitle>Endereços</ModelTitle>
        </Endereços>
        <Produtos>
          <ModelTitle>Produtos</ModelTitle>
        </Produtos>
      </AdminPage>
    </>
  );
};

export default Admin;

const AdminPage = styled.section`
  background-color: #2b2626;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const grow = keyframes`
 0% {
    }
    100% {
      height:80vh;
      width:65vw;
    }
`;
const shrink = keyframes`
 0% {
  
  height:80vh;
      width:65vw;
    }
    100% {
      width: 15%;
      height: 50vh;
    }
`;
const Modelo = styled.div`
  width: 15%;
  height: 50vh;
  border-radius: 5px;
  margin: 3px;
  display: flex;
  justify-content: flex-start;

  animation: ${shrink} 0.5s forwards;
  :hover {
    animation: ${grow} 1s forwards;
  }
`;
const Clientes = styled(Modelo)`
  background: url(${fundoClientes}) 70vw 100vh;
`;

const Endereços = styled(Modelo)`
  background: url(${fundoEnderecos}) 70vw 100vh;
`;

const Produtos = styled(Modelo)`
  background: url(${fundoProdutos}) 70vw 80vh;
`;
const ModelTitle = styled.div`
  color: #4e0f0f;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 4.5vmin;
  background-color: #a0a0a0c5;
  height: 8vh;
  padding: 5px;
  border-radius: 0 0 5px 0;
  display: flex;
  align-items: center;
`;
