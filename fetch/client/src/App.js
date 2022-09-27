function App() {
  
  fetch('http://localhost:4500/api/todo').then((res) => res.json()).then((data) => console.log(data))
  return (
    <div className="App">
      Hi!
    </div>
  );
}

export default App;
