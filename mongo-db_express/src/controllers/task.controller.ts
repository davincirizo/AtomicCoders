import {Response, Request} from 'express'
import { taskServices } from '../services'


export const taskController = {
    indexTask: async(req:Request,res:Response) =>{
        try {
            const data = await taskServices.getAll()
            res.json(data)
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    },

    create: async(req:Request,res:Response) =>{
        try {
            const data = await taskServices.create(req.body)
            res.json(data)
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    },

    update: async(req:Request,res:Response) =>{
        try {
            const {id} = req.params
            const data = await taskServices.update(id,req.body)
            res.json(data)
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    },

    
    delete: async(req:Request,res:Response) =>{
        try {
            const {id} = req.params
            const data = await taskServices.delete(req.body)
            res.json(data)
        } catch (error:any) {
            res.status(400).json({
                message:error.message
            })
        }
    }
    

}
     