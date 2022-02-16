import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createCard } from "./redux/modules/myboard";
import { useHistory } from "react-router-dom";

function Word(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const input_word = React.useRef(null);
  const input_desc = React.useRef(null);
  const input_exam = React.useRef(null);

  const addWord = () => {
    let input_data = {
      word: input_word.current.value,
      desc: input_desc.current.value,
      exam: input_exam.current.value,
    };
    dispatch(createCard(input_data));
    window.setTimeout(() => {
      history.push("/");
    }, 500);
  };

  return (
    <Back>
      <Head>
        <h4>🐰 단어 등록하기 🐰</h4>
      </Head>
      <Main>
        <div>
          <Label>단어 🥕</Label>
          <Text placeholder="단어를 입력해주세요!" ref={input_word}></Text>
        </div>
        <div>
          <Label>설명 🥕</Label>
          <Text
            placeholder="단어에 대한 설명을 해주세요!"
            ref={input_desc}
          ></Text>
        </div>
        <div>
          <Label>예시 🥕</Label>
          <Text
            placeholder="단어를 사용한 예시를 보여주세요!"
            ref={input_exam}
          ></Text>
        </div>
        <Add_btn onClick={addWord}>저장</Add_btn>
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
  h4 {
    color: #fff;
  }
`;
const Main = styled.div`
  display: block;
  background: #fff;
  height: 85vh;
  padding: 10px;
  box-sizing: border-box;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  margin: 50px 0 0 40px;
`;
const Text = styled.input`
  width: 300px;
  margin-top: 5px;
`;
const Add_btn = styled.div`
  background: #e97341;
  color: #fff;
  width: 300px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  border-radius: 20px;
  display: block;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    color: #e97341;
    background: #eee;
    box-shadow: inset -4px -4px 6px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  cursor: pointer;
`;

export default Word;
