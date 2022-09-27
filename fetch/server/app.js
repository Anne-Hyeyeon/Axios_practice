const express = require('express')
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

let id = 2;
const todoList = [
{
    id: 1,
    text: "할 일 1",
    done: false,
}
];

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
  res.send('Hello World');
})

app.get('/api/todo', (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.json(todoList);
})

app.post('/api/todo', (req, res)=>{
    const { text, done } = req.body
    todoList.push({
        id: id++,
        text,
        done,
    });
    return 
    res.header("Access-Control-Allow-Origin", "*");
    res.send("success");
});

app.listen(4500, ()=>{
    console.log("Hi!");
})