import { CreateNewAccountReq } from "../interfaces/users/req/createNewAccountReq.interface"
import { v4 as uuidv4 } from 'uuid';
export class UserDao {

    private userDB = []
    createAccount = (data:CreateNewAccountReq)=> {
       let isExists =  this.userDB.filter(user => {
            return user.email == data.email || user.usernme == data.username
        })
        if(isExists.length > 0) {
            return "username or email already exists"
        } else {
            data['id'] = uuidv4() 
            this.userDB.push(data)
            return "account has been created"
        }
      
    }
    getAllUsers () {
        return this.userDB
    }
}