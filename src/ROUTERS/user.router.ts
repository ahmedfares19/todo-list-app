import { Router,Request,Response } from "express";
import { UserController } from "../CONTROLLERS/user.controller";
import { CreateNewAccount } from "../mappers/users/createNewAccount.mapper";

export class UserRouter {
    userRouter:Router;
    userController:UserController
    constructor(userRouter:Router,userController:UserController){
        this.userRouter = userRouter;
        this.userController = userController;
        this.userRouter.get('/login',(req,res) => {
            res.send("you are loged")
        })
        // logout
        // create account
        this.userRouter.post('/create-new-account',this.createAccount);
        this.userRouter.get("/get-all-users",this.getAllUsers)
    }
    
    createAccount = (req:Request,res:Response) => {
        const data = req.body
        let NewAccountObj = new CreateNewAccount(data)
        console.log(NewAccountObj.getNewAccountObj());
        if(!NewAccountObj.getNewAccountObj()){
            res.send("please enter correct data")
        } else {
            let result = this.userController.createAccount(NewAccountObj.getNewAccountObj())
            res.send(result)
        }
    }

    getAllUsers = (req:Request,res:Response) => {
        let data = this.userController.getAllUsers()
        res.send(data)
    }
}