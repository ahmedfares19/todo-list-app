import { addTaskReq } from "../interfaces/tasks/req/add-task.interface";

export class TaskDao {
    private DB:addTaskReq[] = [];
    constructor(){
      
    }
    addTask = (data:addTaskReq)=> {
        this.DB.push(data)
        return true;
    }

    getAllTasks = (taskId)=> {
        if(taskId){
            return this.DB.filter(task => task.id == taskId)
        } else{ 
            return this.DB
        }
        
        
    }

}