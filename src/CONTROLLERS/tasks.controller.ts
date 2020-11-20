import { TaskDao } from "../DAO/tasks.dao";
import { addTaskReq } from "../interfaces/tasks/req/add-task.interface";

export class TaskController {
    taskdao:TaskDao
    constructor(taskDao:TaskDao){
        this.taskdao = taskDao;
        console.log("from task controller");
    }

    addTask = (data:addTaskReq)=>{
        if(data.name == "" ||data.time == ""){
            return false;
        } else {
            this.taskdao.addTask(data);
            return true;
        }
       
    }

    getAllTasks = (id) => {
        return this.taskdao.getAllTasks(id)
    }
}