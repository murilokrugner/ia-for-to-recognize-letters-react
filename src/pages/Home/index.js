import React from "react";
import { Link } from "react-router-dom";

import fabioti from "../../assets/fabioti.gif";

import { Container, Buttons } from "./styles";

export default function Home() {
  return (
    <Container>
      <h1>Bem vindo(a)</h1>

      <img src={fabioti} alt="bem vindo" />

      <Buttons>
        <Link to="/register">
          <button type="button">Cadastrar</button>
        </Link>
        <Link to="/dashboard">
          <button type="button">IA</button>
        </Link>
      </Buttons>

      <span className="powered">
        Powered by Murilo Krugner and Matheus Andreta
      </span>
      <span>Engenharia de Computação 4° têrmo - 2019</span>
    </Container>
  );
}

//http://giphygifs.s3.amazonaws.com/media/ASd0Ukj0y3qMM/giphy.gif
