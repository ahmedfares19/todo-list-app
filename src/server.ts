import * as express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send("hello from todoList")
})


app.listen(8080,()=>{
    console.log("server is running");
})