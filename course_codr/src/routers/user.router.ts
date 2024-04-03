import { UserControllers } from "../controllers/user.controllers";
import { UserMiddleware } from "../middlewares/user.middlewares";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UserControllers,UserMiddleware>{
    constructor(){
        super(UserControllers,UserMiddleware)
    }

    routes(): void {
        this.router.get('/users', (req,res) => this.controller.getUsers(req,res))
        this.router.get('/users/:id', (req,res) => this.controller.getUsersById(req,res))
        this.router.post('/users', 
        (req,res,next) => [this.middleware.userValidator(req,res,next)],
        (req,res) => this.controller.createUser(req,res))
        this.router.put('/users/:id',
        (req,res,next) => [this.middleware.userValidator(req,res,next)],
        (req,res) => this.controller.updateUser(req,res))
        this.router.delete('/users/:id', (req,res) => this.controller.deleteUser(req,res))

    }
}