/*
  e다 불질러버릴거야~~~~ 
*/

import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "테스트", contents: "테스트", isdone: false },
  ]);
  //제목input
  const [title, setTitle] = useState("");

  //내용 input
  const [contents, setContents] = useState("");
  
  const onSubmitHandler = (e, state="title") => {
    if(state==="title"){
      setTitle(e.target.value)
    }else if(state ==="contents"){
      setContents(e.target.value)
    }
  } 

  const clickAddHandler = () => {
    const newTask = {
      id: task.length + 1,
      title,
      contents,
      isdone: false,
    };

    setTask([...task, newTask]);
    setTitle('')
    setContents('')
  };


  const onChangeHandler = (value, state="change") => {
    if(state==="change"){
      value.isdone = !value.isdone;
      setTask([...task]);  
    }else if (state==="delete"){
      const newTask = task.filter((card) => card.id !== value.id);
      setTask(newTask);
    }
  };
  return (
    <div className="container">
      <div className="title-box">
        <span>MY Todo List</span>
        <span>React</span>
      </div>
      {/* 인풋박스 */}
      <div className="input-container">
        <div className="input-wrap">
          <span className="input-title">제목</span>
          <input
            className="input-box"
            value={title}
            onChange={(e)=>onSubmitHandler(e)}
          />
          <span className="input-title">내용</span>
          <input
            className="input-box"
            value={contents}
            onChange={(e)=>onSubmitHandler(e,"contents")}
          />
        </div>
        <div>
          <button className="input-button" onClick={clickAddHandler}>
            추가하기
          </button>
        </div>
      </div>
      <div>
        <h3>진행중🔥</h3>

        <div className="ing-container">
          {task
            .filter((item) => item.isdone === false)
            .map((value, idx) => (
              <div key={value.id} className="ongoing-box">
                <h2>{value.title}</h2>
                <span>{value.contents}</span>
                <div className="ongoing-button-box">
                  <button
                    className="delete-button"
                    onClick={() => onChangeHandler(value, "delete")}
                  >
                    삭제하기
                  </button>
                  <button
                    className="complete-button"
                    onClick={() => onChangeHandler(value)}
                  >
                    완료
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h3>완료🎉</h3>
        <div className="ing-container">
          {task
            .filter((item) => item.isdone === true)
            .map((item) => (
              <div key={item.id} className="ongoing-box">
                <h2>{item.title}</h2>
                <span>{item.contents}</span>
                <div className="ongoing-button-box">
                  <button className="delete-button" onClick={()=>onChangeHandler(item,"delete")}>삭제하기</button>
                  <button
                    className="complete-button"
                    onClick={() => onChangeHandler(item)}
                  >
                    되돌리기
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
