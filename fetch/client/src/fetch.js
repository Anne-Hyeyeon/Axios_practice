import { useEffect, useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:4500/api/todo').then((res) => res.json()).then((data) => setTodoList(data));
  },[])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch('http://localhost:4500/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      done,
    }),
  }).then(()=>fetch('http://localhost:4500/api/todo').then((res) => res.json()).then((data) => setTodoList(data)).catch((err) => console.log(err))
  );
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList.map((todo) => (
        <div key={todo.id} style={{ display:"flex" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "y" : "n"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
