import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const SERVER_URL = "http://localhost:4500/api/todo";
  const fetchData = async () => {
    const res = await axios.get(SERVER_URL)
    setTodoList(res.data);
  }
  const [todoList, setTodoList] = useState([]);
  useEffect(()=> {
   fetchData();
  },[])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
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
