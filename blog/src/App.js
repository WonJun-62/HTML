/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 피씨방']);
  let [따봉, 따봉변경] = useState(0);
  // let posts = '강남 고기 맛집' 

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 순서바꾸기(){
    var newArray = [...글제목];
    var test = newArray[0];
    newArray[0] = newArray[1];
    newArray[1] = newArray[2];
    newArray[2] = test;
    글제목변경(newArray);
  }

  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ 제목바꾸기 }>제목 버튼</button>
      <button onClick={ 순서바꾸기 }>순서 버튼</button>

      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
