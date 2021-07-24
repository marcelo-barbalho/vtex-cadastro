import React from "react";
import styled from "styled-components";
import cooktop from "../assets/images/cooktop.webp";
import liquidificador from "../assets/images/liquidificador.webp";
import geladeira from "../assets/images/geladeira.webp";
import microOndas from "../assets/images/micro-ondas.webp";
import fritadeira from "../assets/images/fritadeira.webp";

type Product = { img: string; description: string; price: number };

const products: Array<Product> = [
  {
    img: cooktop,
    description: "Cooktop 4 bocas, blala lk dkasas lda slkj",
    price: 21,
  },
  {
    img: liquidificador,
    description: "liquidificador, iducih qwhu qhidhq uiwhd",
    price: 21,
  },
  {
    img: geladeira,
    description: "Geladeira hsui qhwu idh quiwhduiqw",
    price: 21,
  },
  {
    img: fritadeira,
    description: "liquidificador iyasgyugq yhdw ",
    price: 21,
  },
  {
    img: microOndas,
    description: "micro ondar oiunh qw ohadhas dausdh",
    price: 21,
  },
];

const Cards: React.FC = () => {
  return (
    <>
      {products.map((produto) => (
        <Card>
          <Img src={produto.img}></Img>
          <Description>{produto.description}</Description>
          <Price>R${produto.price}</Price>
        </Card>
      ))}
    </>
  );
};

export default Cards;

const Card = styled.div`
  min-width: 170px;
  width: 18%;
  background-color: transparent;
  border-radius: 3px;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
  height: 400px;
  @media (max-width: 470px) {
    width: 100%;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Description = styled.span`
  min-width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1rem;
`;
const Price = styled(Description)`
  background-color: #f75b30;
`;
