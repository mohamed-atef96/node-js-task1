const fs = require("fs");
const http = require("http");

const json = fs.readFileSync("todo.json","utf-8");
const todo = JSON.stringify(json);

const server = http.createServer((req ,res)=>{
    const url = req.url;
        res.end(todo)
   
})
server.listen(3000 , ()=>{
    console.log("server Is runnig")
})