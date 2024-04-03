import { Router } from "express";
import { authController } from "../controllers/auth.controller";

export const routerAuth = Router()

routerAuth.post('/register',authController.register)
routerAuth.post('/login',authController.login)
routerAuth.post('/logout',authController.logout)