import { TaskDao } from "../DAO/tasks.dao";
import { addTaskReq } from "../interfaces/tasks/req/add-task.interface";

export class TaskController {
    taskdao:TaskDao
    constructor(taskDao:TaskDao){
        this.taskdao = taskDao;
        console.log("from task controller");
    }

    addTask = (data:addTaskReq)=>{
            this.taskdao.addTask(data);
            return true;
    }

    getAllTasks = (id) => {
        return this.taskdao.getAllTasks(id)
    }

    deleteTask = (id) => {
       this.taskdao.deleteTask(id)
    }

    updateTask = (data:addTaskReq , id) => {
        this.taskdao.updateTask(data,id)
    }
}