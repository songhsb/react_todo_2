import React from "react";

function Todolist({ todos, setTodos }) {
  return (
    <div>
      <h2>하는 중</h2>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div
              style={{
                border: "2px solid black",
                margin: "5px",
                padding: "5px",
              }}
              key={todo.id}
            >
              <p>{todo.title}</p>
              <p>{todo.detail}</p>
              <button
                onClick={() => {
                  const newTodos = todos.filter((t) => t.id !== todo.id);
                  setTodos(newTodos);
                }}
              >
                삭제
              </button>
              <button
                onClick={function () {
                  const newTodos = todos.map(function (item) {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                완료
              </button>
            </div>
          );
        })}
      <h2>완료</h2>
      {todos
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div
              style={{
                border: "2px solid black",
                margin: "5px",
                padding: "5px",
              }}
              key={todo.id}
            >
              <p>{todo.title}</p>
              <p>{todo.detail}</p>
              <button
                onClick={() => {
                  const newTodos = todos.filter((t) => t.id !== todo.id);
                  setTodos(newTodos);
                }}
              >
                삭제
              </button>
              <button
                onClick={function () {
                  const newTodos = todos.map(function (item) {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                취소
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Todolist;
