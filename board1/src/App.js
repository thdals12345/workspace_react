import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const board_list = [
    {
      'boardNo' : 1,
      'title' : '1번글',
      'content' : '1번글 내용',
      'writer' : '김자바',
      'regDate' : '2024-02-01'
    },
    {
      'boardNo' : 2,
      'title' : '2번글',
      'content' : '2번글 내용',
      'writer' : '홍길동',
      'regDate' : '2024-02-02'
    },
    {
      'boardNo' : 3,
      'title' : '3번글',
      'content' : '3번글 내용',
      'writer' : '임꺽정',
      'regDate' : '2024-02-03'
    },
    {
      'boardNo' : 4,
      'title' : '4번글',
      'content' : '4번글 내용',
      'writer' : '이순신',
      'regDate' : '2024-02-04'
    },
    {
      'boardNo' : 5,
      'title' : '5번글',
      'content' : '5번글 내용',
      'writer' : '장보고',
      'regDate' : '2024-02-05'
    }
  ];

  //state 변수
  let selectedBoard;
  let [isShow, setIsShow] = useState(false);
  let [idx, setIdx] = useState(0); 
  


  return (
    <div className="App">
      <div className='black-nav'>
        <h3>게시글</h3>
      </div>

      <div>
        <table className='table'>
          <thead className='thead'>
            <tr>
              <td>글번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {
              board_list.map((board, i)=>{
                return (
                  <tr key={i}>
                    <td>{board.boardNo}</td>
                    <td>
                      <span onClick={() => {
                        setIsShow(true);
                        setIdx(i);
                      }}>{board.title}</span>
                      </td>
                    <td>{board.writer}</td>
                    <td>{board.regDate}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>

        {
          isShow ? <Detail board_list={selectedBoard} setIdx={idx}/> : ''
        }
    </div>
  );
}

//게시글 내용을 담은 컴포넌트
function Detail(props){
  return(
    <div className='detail'>
      <p>글번호 : {props.board_list[0].boardNo}</p>
      <p>제목 : {props.board_list.title}</p>
      <p>내용 : {props.board_list.content}</p>
      <p>작성자 : {props.board_list.writer}</p>
      <p>작성일 : {props.board_list.regDate}</p>
    </div>

  )


}

export default App;
