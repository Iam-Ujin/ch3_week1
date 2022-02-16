import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "./redux/modules/myboard";

function Board(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const my_list = useSelector((state) => state.myboard.list);

  return (
    <Back>
      <Head>
        <h3>전어 단어 사전 🐰</h3>
      </Head>
      <Main>
        {my_list.map((l, idx) => {
          return (
            <Section>
              <div>
                <span style={{ fontWeight: "bold" }}>단어</span>
                <Edit_box>
                  <Edit_btn
                    onClick={() => {
                      history.push("/edit/" + idx);
                    }}
                  >
                    🥕
                  </Edit_btn>
                  <Del_btn
                    onClick={() => {
                      dispatch(removeCard(idx));
                    }}
                  >
                    🗑
                  </Del_btn>
                </Edit_box>
                <p style={{ fontSize: "12px" }}>{l.word}</p>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>설명</span>
                <p style={{ fontSize: "12px" }}>{l.desc}</p>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>예시</span>
                <Example>{l.exam}</Example>
              </div>
            </Section>
          );
        })}
        <Add_btn>
          <button
            onClick={() => {
              history.push("/word");
            }}
          >
            추가
          </button>
        </Add_btn>
      </Main>
    </Back>
  );
}

const Back = styled.div`
  background: #e97341;
  width: 400px;
  margin: auto;
  height: 100vh;
  border-radius: 15px;
  display: table;
`;
const Head = styled.div`
  background: #e97341;
  display: block;
  h3 {
    text-align: left;
    color: #fff;
    margin-left: 15px;
  }
`;
const Main = styled.div`
  display: block;
  background: #fff;
  height: 85vh;
  padding-top: 5px;
  overflow-x: hidden;
  font-size: 14px;
`;
const Section = styled.div`
  display: block;
  background: #eee;
  border-radius: 30px 30px 30px 0;
  box-sizing: border-box;
  width: 350px;
  margin: 10px 20px;
  padding: 30px;
  text-align: left;
  position: relative;
  &:hover {
    border: 1px solid #e97341;
    box-shadow: 0px 0px 20px 1px #999;
    transition: 0.3s;
  }
`;
const Edit_box = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 30px;
  left: 290px;
`;
const Edit_btn = styled.div`
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
const Del_btn = styled.div`
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;
const Example = styled.p`
  font-size: 12px;
  color: #3c9ddf;
`;
const Add_btn = styled.div`
  display: block;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`;

export default Board;
