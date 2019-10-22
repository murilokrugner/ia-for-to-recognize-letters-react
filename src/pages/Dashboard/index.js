import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { createWorker } from "tesseract.js";
import test from "../../assets/murilo.png";
import { Form, Input } from "@rocketseat/unform";
import signature from "../../assets/icon.svg";

import api from "../../services/api";

import { Container, Loading, File, Button, User } from "./styles";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [ocr, setOcr] = useState([]);
  const [user, setUser] = useState([]);

  function handleImage(e) {
    const data = e.target.files[0];

    setImage(data);
  }

  console.log(image);

  async function worker() {
    setLoading(true);
    const worker = createWorker({
      logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage("por");
    await worker.initialize("por");
    const {
      data: { text }
    } = await worker.recognize(image);
    setOcr(text);
    setLoading(false);
  }

  function handleSubmit() {
    worker();
  }

  const result = ocr;

  async function handleApi() {
    const response = await api.get(`users/${result}`);
    setUser(response.data);
  }

  return (
    <Container>
      <h1>Verifique a assinatura</h1>
      <File>
        <label htmlFor="file">
          <img src={signature} alt="file" />
          <input type="file" id="file" onChange={handleImage} />
        </label>
      </File>
      {loading ? (
        <Loading>
          <HashLoader color="#fff" />
        </Loading>
      ) : (
        <>
          <strong>{ocr}</strong>
        </>
      )}
      <Button>
        <button className="b1" type="button" onClick={() => handleSubmit()}>
          Verificar
        </button>
        <button className="b2 " type="button" onClick={() => handleApi()}>
          Obter os dados
        </button>
      </Button>
      {user.map(user => (
        <User key={user}>
          <strong>{user.name}</strong>
        </User>
      ))}
    </Container>
  );
}
