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
  
  //input 태그에 입력한 값을 저장하고 있는 state 변수
  let [newTitle, setNewTitle] = useState('')


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
            <List setTitle={setTitle} setIsShow={setIsShow} key={i} title={title} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt}/>
            //<List title={title[i]}/>
          );
        })
      }

      <div>
        {/* e : 이벤트 정보 */}
        <input type='text' onChange={(e) => {
          // input 태그에 입력한 값을 출력
          console.log(e.target.value)
          //newTitle의 값을 바꾸기
          setNewTitle(e.target.value)
        }}/>
        <input type='button' value={'저장'} onClick={(e) => {
          //저장 버튼 클릭 -> 게시글 제목으로 글 등록
          //생성되어있는 게시글 제목(title/배열)에 값 추가
          //title.push() x
          //title을 그대로 복사해서 copyTitle 배열 생성
          //copyTitle에 새로운 제목
          let copyTitle = [...title];
          //unshift 가장 최근에 생성(글 추가 시 내림차순)
          copyTitle.unshift(newTitle);
          //타이틀 값을 변경
          setTitle(copyTitle);
        }}/>
      </div>

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
      }}>{props.title[props.idx]}</span> 
      {/* <span onClick={() => {
        let copyLikeCnt = [...props.likeCnt];
        copyLikeCnt[props.idx]++;
        props.setLikeCnt(copyLikeCnt);
      }}>👍</span> {props.likeCnt[props.idx]} */}
      </h4>
      <p>2월 19일 작성</p>
      <button type='button' onClick={(e) => {
        //삭제 버튼 클릭 시 게시글 삭제
        //title을 그대로 복사해서 copyTitle 배열 생성
        let copyTitle = [...props.title];
        copyTitle.splice(props.idx, 1);
        props.setTitle(copyTitle);
      }}>삭제</button>
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
