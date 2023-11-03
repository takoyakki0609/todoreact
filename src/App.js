/* 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
  Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.
  Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.

  1스타일 미리 지정 후 나중에 컴포넌트 정리하며 app.css에옮기기 - 완 
  2. input태그 value, onchange
  3. button onclick
*/

import { useState } from "react";
import "./App.css";

function App() {
  const [card, setCard] = useState([
    { id: 1, title: "테스트", content: "테스트" },
  ]);
  const [complete, setComplete] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const clickAddHandler = () => {
    const newCard = {
      id: card.length + 1,
      title,
      content,
    };

    setCard([...card, newCard]);
  };

  const onDeleteHandler = (id) => {
    const newCard = card.filter((card) => card.id !== id);
    setCard(newCard);
  };

  const onClickCompleteHandler = (dc) => {
    //클릭했을 떄 card에 있던 배열이 done 배열로 이동해야함
    const doneCard = {
      id: complete.length + 1,
      title: dc.title,
      content: dc.content,
    };

    setComplete([...complete, doneCard]);
    console.log(setComplete)
    setCard(card.filter((d) => d.id !== dc.id));
    console.log(setCard)
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
          <input className="input-box" value={title} onChange={titleHandler} />
          <span className="input-title">내용</span>
          <input
            className="input-box"
            value={content}
            onChange={contentHandler}
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
          {card.map((value, idx) => (
            <div key={value.id} className="ongoing-box">
              <h2>{value.title}</h2>
              <span>{value.content}</span>
              <div className="ongoing-button-box">
                <button
                  className="delete-button"
                  onClick={() => onDeleteHandler(value.id)}
                >
                  삭제하기
                </button>
                <button
                  className="complete-button"
                  onClick={() => onClickCompleteHandler(value.id)}
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
          {complete.map((item) => (
            <div key={item.id} className="ongoing-box">
              <h2>{item.title}</h2>
              <span>{item.content}</span>
              <div className="ongoing-button-box">
                <button
                  className="delete-button"
                  onClick={() => onDeleteHandler(item.id)}
                >
                  삭제하기
                </button>
                <button className="complete-button">되돌리기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
