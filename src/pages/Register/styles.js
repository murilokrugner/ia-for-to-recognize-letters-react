import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin-top: 150px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-weight: bold;
  }

  form {
    display: flex;
    width: 300px;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      margin-top: 50px;
      height: 44px;
      background: #ff2f84;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }

    a {
      display: flex;
      justify-content: center;
    }

    button.cancel {
      margin: 5px 0 0;
      margin-top: 50px;
      height: 44px;
      width: 100px;
      background: #4169e1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  a {
    margin-top: 30px;

    button {
      margin: 40px 0 0;
      height: 30px;
      width: 80px;
      background: #4169e1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }
  }
`;
