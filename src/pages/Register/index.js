import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("O nome é obrigatório!")
    .max(12),
  course: Yup.string()
    .required("O curso é obrigatório!")
    .max(40),
  age: Yup.number()
    .required()
    .positive()
    .integer()
    .typeError("Não quer falar sua idade né? mas é obrigatório!")
});

export default function Register() {
  const [user, setUser] = useState();

  async function handleSubmit({ name, course, age }) {
    const response = await api.post("/users", {
      name,
      course,
      age
    });

    if (response) {
      toast.success("Cadastro realizado com sucesso!");
    }

    if (response.request.status === 400) {
      toast.error("Cadastro não realizado, verifique todos os campos!");
    }

    console.log(response);
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <h1>Cadastro</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Primeiro Nome" />
        <Input name="course" placeholder="Curso" />
        <Input name="age" type="number" placeholder="Sua idade" />

        <button type="submit">Cadastrar</button>
      </Form>

      <Link to="/">
        <button className="cancel" type="button">
          Cancelar
        </button>
      </Link>
    </Container>
  );
}
