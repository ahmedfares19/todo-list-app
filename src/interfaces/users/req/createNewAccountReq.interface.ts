import { gender } from "../../../Enums/gender.enum";

export interface CreateNewAccountReq {
    firstName:string,
    secondName:string,
    username:string,
    email:string,
    password:string,
    phone:string,
    address:string,
    age:number,
    gender:gender // enum 
}