import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;

  h1 {
    color: #fff;
  }

  img {
    margin-top: 40px;
    height: 150px;
    width: 180px;
    border-radius: 50%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 50px;
  width: 300px;
  height: 100%;
  justify-content: space-around;

  button {
    margin: 40px 0 0;
    height: 50px;
    width: 100px;
    background: #ff2f84;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
  }
`;
