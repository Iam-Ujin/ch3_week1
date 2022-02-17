import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCard, updateCardFB } from "./redux/modules/myboard";

function Edit(props) {
  const card_list = useSelector((state) => state.myboard.list);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const card_index = params.idx;
  console.log(card_list[card_index]);

  const word = React.useRef(null);
  const desc = React.useRef(null);
  const exam = React.useRef(null);

  const editWord = () => {
    let input_data = {
      word: word.current.value,
      desc: desc.current.value,
      exam: exam.current.value,
    };
    dispatch(updateCardFB(card_list[card_index].id, input_data));
    history.push("/");
  };

  return (
    <Back>
      <Head>
        <h4>🐰 사전 편집하기 🐰</h4>
      </Head>
      <Main>
        <div>
          <Label>단어 🥕</Label>
          <Text ref={word}>{card_list[card_index].word}</Text>
        </div>
        <div>
          <Label>설명 🥕</Label>
          <Text ref={desc}>{card_list[card_index].desc}</Text>
        </div>
        <div>
          <Label>예시 🥕</Label>
          <Text ref={exam}>{card_list[card_index].exam}</Text>
        </div>
        <Add_btn onClick={editWord}>수정</Add_btn>
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
  border-radius: 10px;
  height: 85vh;
  padding: 10px;
  box-sizing: border-box;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  margin: 50px 0 0 40px;
`;
const Text = styled.textarea`
  width: 300px;
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
    background: rgb(152, 216, 163);
    box-shadow: inset -4px -4px 6px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  cursor: pointer;
`;

export default Edit;
