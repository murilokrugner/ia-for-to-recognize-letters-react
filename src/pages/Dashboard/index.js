import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import test from "../../assets/por.png";

import { Container } from "./styles";

export default function Dashboard() {
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

  const [ocr, setOcr] = useState("Recognizing...");
  useEffect(() => {
    doOCR();
  });

  return (
    <Container>
      <p>{ocr}</p>
    </Container>
  );
}
