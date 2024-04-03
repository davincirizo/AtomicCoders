import {Response, Request, json} from 'express'
import { authService } from '../services'

export const authController = {
    register: async(req:Request,res:Response) =>{
        try {
        const data = authService.register(req.body)
        res.status(200).json({
        message:"User Created correctly",
        })
            
        } catch (error) {
            
        }

    },
    login: async(req:Request,res:Response) => {
        try {
            
        } catch (error) {
            
        }
    },
    logout: async() => {
        try {
            
        } catch (error) {
            
        }

    }

}