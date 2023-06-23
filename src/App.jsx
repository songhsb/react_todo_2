import { useState } from "react";
import uuid from "react-uuid";
import Todolist from "./components/Todolist";

function App() {
  const initilState = [
    {
      id: uuid(),
      title: "제목 1",
      detail: "내용입니다. 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목 2",
      detail: "내용입니다. 2",
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(initilState);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  return (
    <div>
      <header>
        <h1>헤더</h1>
      </header>
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTodos = {
              id: uuid(),
              title,
              detail,
              isDone: false,
            };
            setTodos([...todos, newTodos]);
            setTitle("");
            setDetail("");
          }}
        >
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <label>내용</label>
          <input
            type="text"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></input>
          <button type="submit">추가하기</button>
        </form>
        <Todolist todos={todos} setTodos={setTodos}></Todolist>
      </main>
      <footer>푸터</footer>
    </div>
  );
}

export default App;
