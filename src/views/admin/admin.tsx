import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import fundoClientes from "../../assets/images/comunicacao-inclusiva.png";
import fundoEnderecos from "../../assets/images/navigation.webp";
import fundoProdutos from "../../assets/images/estoque.jpg";
import Form from "../../components/form";

const Admin: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("");
  return (
    <>
      <AdminPage>
        <Clientes
          isSelected={selectedPage === "client"}
          onClick={() => setSelectedPage("client")}
        >
          <ModelTitle>Clientes</ModelTitle>
          {selectedPage === "client" && <Form selectedPage={selectedPage} />}
        </Clientes>
        <Endereços
          isSelected={selectedPage === "address"}
          onClick={() => setSelectedPage("address")}
        >
          <ModelTitle>Endereços</ModelTitle>
          {selectedPage === "address" && <Form selectedPage={selectedPage} />}
        </Endereços>
        <Produtos
          isSelected={selectedPage === "products"}
          onClick={() => setSelectedPage("products")}
        >
          <ModelTitle>Produtos</ModelTitle>
          {selectedPage === "products" && <Form selectedPage={selectedPage} />}
        </Produtos>
      </AdminPage>
    </>
  );
};

export default Admin;

const AdminPage = styled.section`
  background-color: #2b2626;
  min-height: 73vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const grow = keyframes`
 0% {
    }
    100% {
      height:70vh;
      width:65vw;
   
    }
`;
const shrink = keyframes`
 0% {
  
  height:70vh;
      width:65vw;
    }
    100% {
      width: 15%;
      height: 50vh;
    }
`;
const Modelo = styled.div<{ isSelected: boolean }>`
  width: 15%;
  height: 50vh;
  border-radius: 5px;
  margin: 3px;
  display: flex;
  justify-content: flex-start;
  min-width: 150px;

  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        animation: ${grow} 0.5s forwards;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `;
    } else {
      return css`
        animation: ${shrink} 0.5s forwards;
        justify-content: flex-start;
      `;
    }
  }}
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
  font-family: sans-serif;
  font-size: 4.5vmin;
  background-color: #a0a0a0c5;
  height: 8vh;
  padding: 5px;
  border-radius: 5px 0 5px 0;
  display: flex;
  align-items: center;
`;
