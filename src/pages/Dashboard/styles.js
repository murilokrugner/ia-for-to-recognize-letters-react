import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 100px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  strong {
    margin-top: 100px;
    color: #fff;
  }

  a {
    margin-top: 50px;
  }

  button {
    margin: 40px 0 0;
    margin-bottom: 20px;
    height: 30px;
    width: 80px;
    background: #6094CC;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const Loading = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
`;

export const File = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      margin-top: 30px;
      height: 50px;
      width: 50px;
    }

    input {
      display: none;
    }
    input.type.file {
      color: #000;
    }
  }

  h6 {
    margin-top: 5px;
    color: #fff;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;

  button.b1 {
    margin: 40px 0 0;
    height: 50px;
    width: 100px;
    background: #3C5D80;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
  }

  button.b2 {
    margin-top: 40px;
    margin-left: 20px;
    height: 50px;
    width: 100px;
    background: #3C5D80;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 18rem;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #1E2E40;
  position: relative;

  h5 {
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: 10px;
    color: #ffffff;
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      margin: 10px;
      color: #ffffff;
    }
  }
`;
