import { addTaskReq } from "../interfaces/tasks/req/add-task.interface";
import { v4 as uuidv4 } from 'uuid';
export class TaskDao {
    private DB:any[] = [];
    constructor(){
      
    }

    updateTask = (data:addTaskReq , id) => {
        //this.DB.map()
        this.DB.forEach(task => {
            if(task.id == id){
                task.name = data.name,
                task.description = data.description
                task.deadline = data.deadline
            }
        })
    }
    addTask = (data:addTaskReq)=> {
        data['id'] =uuidv4() 
        this.DB.push(data)
        return true;
    }
    getAllTasks = (taskId)=> {
        if(!taskId){
            return this.DB
        }else {
            return this.DB.filter(task => task.id == taskId) 
        }
           
    }
    deleteTask = (id)=> {
        this.DB = this.DB.filter(task => task.id != id)
    }

}