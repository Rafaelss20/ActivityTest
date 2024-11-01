import { Router } from "express";
import { firstController } from "./controller/FirstController";
import { Request, Response } from "express";
import { CreateUser } from "./routers/signupRouter";




const router: Router = Router()

// const createUserService = new CreateUserService
const createUser = new CreateUser
//Routes
router.get("/", firstController.loginUser);
router.get("/create", firstController.createUser);
router.get("/home", firstController.homer);
router.post('/createUserForm', (req: Request, res: Response) => {
    createUser.save(req,res)
})

export { router };