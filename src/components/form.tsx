import React from "react";
import styled from "styled-components";

type formProps = {
  selectedPage: String;
};

const Form = (props: formProps) => {
  const submit = (event: any) => {
    event.preventDefault();
    const {
      name,
      email,
      cel,
      address,
      complement,
      reference,
      postalCode,
      description,
      image,
      price,
    } = event.target.elements;
    if (props.selectedPage === "client") {
      const oldClients = localStorage.getItem("clients") ?? "[]";
      const clients: Array<{ name: string; email: string; cel: string }> =
        JSON.parse(oldClients);
      clients.push({ name: name.value, email: email.value, cel: cel.value });
      localStorage.setItem("clients", JSON.stringify(clients));
    } else if (props.selectedPage === "address") {
      const oldAddresses = localStorage.getItem("addresses") ?? "[]";
      const addresses: Array<{
        address: string;
        complement: string;
        reference: string;
        postalCode: string;
      }> = JSON.parse(oldAddresses);
      addresses.push({
        address: address.value,
        complement: complement.value,
        reference: reference.value,
        postalCode: postalCode.value,
      });
      localStorage.setItem("addresses", JSON.stringify(addresses));
    } else if (props.selectedPage === "products") {
      const oldProducts = localStorage.getItem("products") ?? "[]";
      const products = JSON.parse(oldProducts);
      products.push({
        description: description.value,
        image: image.value,
        price: price.value,
      });

      localStorage.setItem("products", JSON.stringify(products));
    }
  };

  switch (props.selectedPage) {
    case "client":
      return (
        <FormWrapper onSubmit={submit}>
          <Input placeholder="Nome" name="name" type="text"></Input>
          <Input placeholder="Email" name="email" type="email"></Input>
          <Input placeholder="Cel" name="cel" type="tel"></Input>
          <Button>Enviar</Button>
        </FormWrapper>
      );

    case "address":
      return (
        <FormWrapper onSubmit={submit}>
          <Input placeholder="Endereço" name="address" type="text"></Input>
          <Input
            placeholder="Complemento"
            name="complement"
            type="text"
          ></Input>
          <Input placeholder="Referência" name="reference" type="text"></Input>
          <Input placeholder="Cep" name="postalCode" type="number"></Input>
          <Button>Enviar</Button>
        </FormWrapper>
      );

    case "products":
      return (
        <FormWrapper onSubmit={submit}>
          <Input placeholder="Descrição" name="description" type="text"></Input>
          <Input placeholder="Imagem" name="image" type="file"></Input>
          <Input placeholder="Preço" name="price" type="number"></Input>
          <Button>Enviar</Button>
        </FormWrapper>
      );

    default:
      return <></>;
  }
};

export default Form;

const FormWrapper = styled.form`
  height: 40vh;
  width: 30vw;
  background-color: #383b3dcc;
  border-radius: 5px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 25px;
  background-color: #cacaca;
`;
const Button = styled.button`
  padding: 7px;
  border-radius: 5px;
  border: none;
`;
