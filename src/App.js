import React from "react";
import Board from "./Board";
import Edit from "./Edit";
import Word from "./Word";
import NotFound from "./NotFound";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  const [list, setList] = React.useState([
    { word: " 쯔쯔", desc: "우리집 고양이", exam: "쯔쯔는 츄르를 좋아해" },
    {
      word: " 전어",
      desc: "유진이 별명",
      exam: "유진이는 고등학생 때 전어라고 불렸다",
    },
    {
      word: " 리액트",
      desc: "자바스크립트 라이브러리",
      exam: "리액트는 너무 어려어",
    },
  ]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Board list={list} />
        </Route>
        <Route path="/edit/:idx" component={Edit}></Route>
        <Route path="/word" component={Word}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
