import { Request, Response } from "express";
import { userServices } from "../services/user.service";
import { HttpResponse } from "../response/http.response";
import { UserModel } from "../models/user.model";
import { isValidObjectId } from "mongoose";

export class UserControllers {
    constructor(
        private readonly ServiceUser: userServices = new userServices(),
        private readonly httpResponse: HttpResponse = new HttpResponse(),
    ) { }

    async getUsers(req: Request, res: Response) {
        try {
            const data = await this.ServiceUser.index()
            return this.httpResponse.OK(res, data)

        }
        catch (error) {
            return this.httpResponse.Error(res, error)
        }
    }
    async getUsersById(req: Request, res: Response) {
        const { id } = req.params
        if(!isValidObjectId(id)){
            return this.httpResponse.NotFound(res,'Not Found')
        }
        try {
            const data = await this.ServiceUser.findUserById(id)
            return this.httpResponse.OK(res, data)

        }
        catch (error) {
            this.httpResponse.Error(res, error)
        }
    }
    async createUser(req: Request, res: Response) {
        const { id } = req.params
        try {
            const data = await this.ServiceUser.create(req.body)
            this.httpResponse.OK(res, data)

        }
        catch (error) {
            this.httpResponse.Error(res, error)
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params
        if(!isValidObjectId(id)){
            return this.httpResponse.NotFound(res,'Not Found')
        }
        try {
            const data = await this.ServiceUser.update(id, req.body)
            this.httpResponse.OK(res, data)
        }
        catch (error) {
            res.json(error)
        }
    }
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params
        if(!isValidObjectId(id)){
            return this.httpResponse.NotFound(res,'Not Found')
        }
        try {
            const data = await this.ServiceUser.delete(id)
            this.httpResponse.OK(res, data)


        }
        catch (error) {
            res.json(error)
        }
    }

}