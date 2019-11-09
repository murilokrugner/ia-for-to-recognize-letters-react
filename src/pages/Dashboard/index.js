import React, { useState } from "react";
//import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
import { createWorker } from "tesseract.js";
import signature from "../../assets/icon.svg";

import api from "../../services/api";

import { Container, Loading, File, Button, User } from "./styles";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [image, setImage] = useState();
  const [ocr, setOcr] = useState([]);
  const [user, setUser] = useState([""]);

  function handleImage(e) {
    const data = e.target.files[0];

    setImage(data);
  }

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

  const result = ocr.toString();

  const upper = result.toUpperCase();

  async function searchApi() {
    setLoadingData(true);
    const response = await api.get(`users/${upper}`);
    setUser(response.data);
    console.log(response.data);
    setLoadingData(false);
  }

  function handleApi() {
    searchApi();
  }

  return (
    <Container>
      <h1>Verifique o manuscrito</h1>
      <File>
        <label htmlFor="file">
          <img src={signature} alt="file" />
          <input
            type="file"
            id="file"
            accept="video/*;capture=camrecorder"
            onChange={handleImage}
          />
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
      {loadingData ? (
        <Loading>
          <HashLoader color="#fff" />
        </Loading>
      ) : (
        <User>
          <h5>Resultados:</h5>
          {user.map(user => (
            <ul key={user}>
              <li>Nome: {user.name}</li>
              <li>Curso: {user.course}</li>
              <li>Idade: {user.age}</li>
              <hr />
            </ul>
          ))}
        </User>
      )}

      <Link to="/">
        <button className="cancel" type="button">
          Início
        </button>
      </Link>
    </Container>
  );
}
