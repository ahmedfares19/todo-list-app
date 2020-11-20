import * as express from 'express';
import { TaskController } from './CONTROLLERS/tasks.controller';
import {TaskRouter} from './ROUTERS/tasks.router';
import { UserRouter } from './ROUTERS/user.router';
import * as bodyparser from "body-parser"
import { TaskDao } from './DAO/tasks.dao';
const app = express();
app.use(bodyparser.json())
const taskRouter = express.Router();
const taskDaoObj = new TaskDao();
const taskController = new TaskController(taskDaoObj);
const taskRouterObj = new TaskRouter(taskRouter,taskController);
const userRouter = express.Router();
const userRouterObj = new UserRouter(userRouter)



app.use('/tasks',taskRouter);
app.use('/users',userRouter)
app.get('/',(req,res)=>{
    res.send("hello from todoList")
})
app.listen(8080,()=>{
    console.log("server is running");
})