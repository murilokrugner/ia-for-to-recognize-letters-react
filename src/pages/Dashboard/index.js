import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import test from "../../assets/murilo.png";
import { Form, Input } from "@rocketseat/unform";

import api from "../../services/api";

import { Container, Date, Result } from "./styles";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [ocr, setOcr] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function doOCR() {
      const worker = createWorker({
        logger: m => console.log(m)
      });
      await worker.load();
      await worker.loadLanguage("por");
      await worker.initialize("por");
      const {
        data: { text }
      } = await worker.recognize(test);
      setOcr(text);
      if (!text) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }

    doOCR();
  }, [ocr]);

  const result = ocr;

  async function handleSubmit() {
    const response = await api.get(`users/${result}`);
    setUser(response.data);
    console.log(response.data);
  }

  return (
    <Container>
      {loading ? (
        <Date>
          <strong>Carregando...</strong>
        </Date>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <strong>Nome processado: {ocr}</strong>
            <br />
            <button type="submit">Verificar autenticidade</button>
          </Form>
        </>
      )}
    </Container>
  );
}
