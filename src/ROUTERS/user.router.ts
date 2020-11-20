import { Router } from "express";

export class UserRouter {
    userRouter:Router;
    constructor(userRouter:Router){
        this.userRouter = userRouter;
        this.userRouter.get('/login',(req,res) => {
            res.send("you are loged")
        })
    }
}