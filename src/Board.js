import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCardFB, loadCardFB } from "./redux/modules/myboard";

function Board(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const my_list = useSelector((state) => state.myboard.list);

  React.useEffect(() => {
    dispatch(loadCardFB());
  }, []);

  return (
    <Back>
      <Head>
        <h3>전어 단어 사전 🐰</h3>
      </Head>
      <Main>
        {my_list.map((l, idx) => {
          return (
            <Section key={idx}>
              <div>
                <Section_top>
                  <Span>단어</Span>
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
                        dispatch(removeCardFB(my_list[idx].id));
                      }}
                    >
                      🗑
                    </Del_btn>
                  </Edit_box>
                </Section_top>
                <p>{l.word}</p>
              </div>
              <div>
                <Span>설명</Span>
                <p>{l.desc}</p>
              </div>
              <div>
                <Span>예시</Span>
                <Example>{l.exam}</Example>
              </div>
            </Section>
          );
        })}
        <Add_btn_box>
          <Add_btn
            onClick={() => {
              history.push("/word");
            }}
          >
            🥕
          </Add_btn>
        </Add_btn_box>
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
  overflow: hidden;
`;
const Section_top = styled.div`
  justify-content: space-between;
`;
const Span = styled.span`
  font-weight: bold;
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
  color: #3c9ddf;
`;
const Add_btn_box = styled.div`
  display: block;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`;
const Add_btn = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 40px;
  background: #f1ad90;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgb(152, 216, 163);
    transition: 0.3s;
  }
`;

export default Board;
