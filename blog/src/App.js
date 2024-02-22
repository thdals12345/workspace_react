import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //let title = "첫번째 글";

  let arr = [1, 2];
  let num1 = arr[0];
  let num2 = arr[1];
  let [a, b] = [1, 2]
  console.log(a);

  //state 변수
  let [title, setTitle] = useState(['리액트 학습', '울산 맛집', '겨울 코트 추천']); 
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h3>Blog</h3>
      </div>

      <button type='button' onClick={() => {
        let title2 = [...title];
        title2[0] = '남자 옷 추천';
        setTitle(title2);
      }}>글 변경</button>

      {
        // title : 배열에 들어있는 각각의 데이터
        // 배열의 개수만큼 반복
        // 반복문에서 하나씩 빼서 뭐라고 할래...?
        // i만큼 빼서 e라고 하겠다.
        // map은 리턴 가능
        title.map((e, i) => {
          return(
            <List setIsShow={setIsShow} key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt}/>
            //<List title={title[i]}/>
          );
        })
      }

      {
        isShow ? <Detail /> : ''
      }


    </div>
  );
}

function getArr(){
  let aa = [1, 2];
  return aa;
}
let [a, b] = getArr();

//블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return (
    <div className='list'>
      <h4> <span onClick={() => {
        props.setIsShow(true)
      }}>{props.title}</span> <span onClick={() => {
        let copyLikeCnt = [...props.likeCnt];
        copyLikeCnt[props.idx]++;
        props.setLikeCnt(copyLikeCnt);
      }}>👍</span> {props.likeCnt[props.idx]} </h4>
      <p>2월 19일 작성</p>
  </div>
  );
}

// 상세 정보를 표현하는 컴포넌트
function Detail(){
  return(
    <div className='detail'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
