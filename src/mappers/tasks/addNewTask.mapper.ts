import { addTaskReq } from "../../interfaces/tasks/req/add-task.interface";

/* 
 data from req.body
 {
     name:Ahmed"
     time: 12:05AM
     age:15
 }

*/
export class AddNewTaskMapper {
    newTask: addTaskReq = null;
    constructor(reqBody: any) {
        this.newTask = {
            name: reqBody.name,
            description: reqBody.description,
            deadline: reqBody.deadline
        }
    }
    getReqObj() {
        if (this.newTask.name == null || this.newTask.name == "" || this.newTask.deadline == null || this.newTask.name == ""){
            return null
        }else {
            return this.newTask
        }
    }
}