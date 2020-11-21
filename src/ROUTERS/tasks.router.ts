import { Router } from "express";
import { TaskController } from "../CONTROLLERS/tasks.controller";
import { AddNewTaskMapper } from "../mappers/tasks/addNewTask.mapper";

export class TaskRouter {
    taskRouter:Router
    taskController:TaskController
    constructor(taskRouter:Router,taskController:TaskController){
     this.taskRouter =taskRouter; 
     this.taskController = taskController;
    this.taskRouter.get('/add-task',this.addTask)
    this.taskRouter.get('/get-all-tasks',this.getAllTasks)
    this.taskRouter.get('/delete-task',this.deleteTask)
    this.taskRouter.get('/update-task',this.updateTask)
    }


    updateTask = (req, res) => {
        const taskId = req.body.id;
        if(!taskId){
            res.send('Plese enter task Id')
        }else {
        const addNewReq = new AddNewTaskMapper(req.body);
        if(!addNewReq.getReqObj()){
            res.send("Please enter correct data")
        } else {
             this.taskController.updateTask(addNewReq.getReqObj(),taskId);
             res.send("task has been updated")
        }
        }
    }
    deleteTask = (req, res) => {
        const taskId = req.body.id;
        console.log(taskId);
        if(!taskId){
          res.send("please enter task id")
        }else {
           this.taskController.deleteTask(taskId);
           res.send("task has been deleted")
        }
    }
    addTask = (req,res)=>{
        const data = req.body;
        const addNewReq = new AddNewTaskMapper(data);
        if(!addNewReq.getReqObj()){
            res.send("Please enter correct data")
        } else {
             this.taskController.addTask(addNewReq.getReqObj());
             res.send("task has been added")
        }
    }
    getAllTasks = (req,res)=>{
        const id = req.body.id
        const allTasks = this.taskController.getAllTasks(id);
        res.send(allTasks);
     }
}