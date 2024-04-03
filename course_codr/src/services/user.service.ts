import { UserDto } from "../dto/user.dto"
import { UserModel } from "../models/user.model"


export class userServices  {
async index(){
    return await UserModel.find()
}

async findUserById(id:string){
    return await UserModel.findById(id)

}

async create(body:UserDto){
    body.dateCreated = new Date()
    body.dateUpdate = new Date()
    const bcrypt = require('bcrypt');
    body.password = await bcrypt.hash(body.password, 10);
    return await UserModel.create(body)

}

async update(id:string,body:UserDto){
    body.dateUpdate = new Date()
    const user = await UserModel.findByIdAndUpdate(id,body,{ new: true })
    return user
}

async delete(id:string){
    await UserModel.findByIdAndDelete(id)
    return "Delete Correctly"
}
}