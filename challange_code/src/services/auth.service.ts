import { userModel } from "../models/user.models"

export const authService = {
    async register(entity:object){
        return userModel.create(entity)

    },
    async login(){

    },
    async logout(){

    },
}