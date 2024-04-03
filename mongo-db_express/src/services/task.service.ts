import { TaskModel } from "../models/task.models"

export const taskServices = {
    async getAll(){
        return await TaskModel.find()
    },
    create :async(entity:object) =>{
        return await TaskModel.create(entity)
    },
    update :async(id:string,body:object) =>{
        return await TaskModel.findByIdAndUpdate(id,body)
    },
    delete :async(id:string) =>{
        return await TaskModel.findByIdAndDelete(id)
    }
}