"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const user_controllers_1 = require("../controllers/user.controllers");
const router_1 = require("./router");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controllers_1.UserControllers);
    }
    routes() {
        this.router.get('/users', (req, res) => this.controller.getUsers(req, res));
        this.router.get('/users/:id', (req, res) => this.controller.getUsersById(req, res));
        this.router.post('/users', (req, res) => this.controller.createUser(req, res));
        this.router.put('/users/:id', (req, res) => this.controller.updateUser(req, res));
        this.router.delete('/users/:id', (req, res) => this.controller.deleteUser(req, res));
    }
}
exports.UserRouter = UserRouter;
