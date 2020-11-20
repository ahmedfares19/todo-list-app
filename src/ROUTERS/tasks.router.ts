import { Router } from "express";
import { TaskController } from "../CONTROLLERS/tasks.controller";

export class TaskRouter {
    taskRouter:Router
    taskController:TaskController
    constructor(taskRouter:Router,taskController:TaskController){
     this.taskRouter =taskRouter; 
     this.taskController = taskController;
    this.taskRouter.get('/add-task',this.addTask)
    this.taskRouter.get('/get-all-tasks',this.getAllTasks)
    }


    addTask = (req,res)=>{
        const data = req.body;
        const isCorrect = this.taskController.addTask(data);
        if(isCorrect){
            res.send("task has been added")
        } else {
            res.send("Please enter correct data")
        }
       
    }
    getAllTasks = (req,res)=>{
        const id = req.body.id
        const allTasks = this.taskController.getAllTasks(id);
        res.send(allTasks);
     }
}