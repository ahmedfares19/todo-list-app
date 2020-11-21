import { CreateNewAccountReq } from "../../interfaces/users/req/createNewAccountReq.interface";

export class CreateNewAccount {
    private newAccount: CreateNewAccountReq = null
    constructor(reqBody: any) {
        this.newAccount = {
            firstName: reqBody.firstName,
            secondName: reqBody.secondName,
            email: reqBody.email,
            age: reqBody.age,
            gender: reqBody.gender,
            address: reqBody.address,
            password: reqBody.password,
            phone: reqBody.phone,
            username: reqBody.username
        }
    }

    getNewAccountObj = () => {
        const obj = this.newAccount;
        let isVaildMail = obj.email == null || obj.email == "";
        let isVaildPass = obj.password == null || obj.password == "" || obj.password.length < 6;
        let isValidUserName = obj.username == null || obj.username == "";
        let isValidName = obj.firstName == null || obj.firstName == ""
        if (isVaildMail || isVaildPass || isValidName || isValidUserName) {
            return null
        } else {
            return this.newAccount
        }
    }
}