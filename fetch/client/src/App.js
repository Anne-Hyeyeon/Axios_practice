import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:4500/api/todo').then((res) => res.json()).then((data) => setTodoList(data));
  },[])
  return (
    <div className="App">
      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "y" : "n"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
