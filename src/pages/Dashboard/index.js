import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import test from "../../assets/por.png";

import api from "../../services/api";

import { Container, Date } from "./styles";

export default function Dashboard() {
  const [ocr, setOcr] = useState("Recognizing...");
  const [user, setUser] = useState([]);

  const worker = createWorker({
    logger: m => console.log(m)
  });

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage("por");
    await worker.initialize("por");
    const {
      data: { text }
    } = await worker.recognize(test);
    setOcr(text);
  };

  useEffect(() => {
    doOCR();
    async function loadUser() {
      const response = await api.get("users", {
        params: { name: "Murilo" }
      });

      setUser(response.data);
    }

    loadUser();
  }, [doOCR]);

  console.log(user);

  return (
    <Container>
      <p>{ocr}</p>
    </Container>
  );
}
