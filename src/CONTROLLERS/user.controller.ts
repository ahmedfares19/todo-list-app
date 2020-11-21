import { UserDao } from "../DAO/user.dao"

export class UserController {
    userDao:UserDao
    constructor(userDao:UserDao){
        this.userDao = userDao
    }
   
    createAccount(data){
      return this.userDao.createAccount(data)
    }
    getAllUsers() {
        return this.userDao.getAllUsers();
    }
}