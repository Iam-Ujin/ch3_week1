import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function NotFound(props) {
  const history = useHistory();
  return (
    <Back>
      <Head>
        <h1>🐰</h1>
      </Head>
      <Main>
        <p>❗️ 유효하지 않은 주소입니다.</p>
        <BackBtn
          onClick={() => {
            history.goBack();
          }}
        >
          뒤로가기
        </BackBtn>
      </Main>
    </Back>
  );
}

const Back = styled.div`
  background: #e97341;
  width: 400px;
  margin: auto;
  height: 100vh;
  border-radius: 10px;
  display: table;
`;
const Head = styled.div`
  background: #e97341;
  display: block;
  h1 {
    color: #fff;
  }
`;
const Main = styled.div`
  display: block;
  background: #fff;
  border-radius: 10px;
  height: 85vh;
  padding: 10px;
  box-sizing: border-box;
  p {
    line-height: 65vh;
    font-weight: bold;
  }
`;
const BackBtn = styled.button`
  border: none;
  background: #e97341;
  color: #fff;
  width: 150px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  border-radius: 20px;
  display: block;
  position: fixed;
  bottom: 280px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    color: #e97341;
    background: #eee;
    box-shadow: inset -4px -4px 6px 0 rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
  cursor: pointer;
`;

export default NotFound;
