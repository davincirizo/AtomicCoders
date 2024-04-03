import { NextFunction, Request, Response } from "express";
import { UserDto } from "../dto/user.dto";
import { validate } from "class-validator";
import { HttpResponse } from "../response/http.response";

export class UserMiddleware{
    constructor(private readonly httpResponse: HttpResponse = new HttpResponse()){}
    userValidator(req:Request, res:Response,next:NextFunction){
        const {userName,email,password} = req.body

    const valid = new UserDto()

    valid.userName = userName
    valid.email = email
    valid.password = password

    validate(valid).then((error) =>{
        if(error.length > 0){
            return this.httpResponse.BadRequest(res,error)
        }
        else{
            next()
        }
    })

    }
}