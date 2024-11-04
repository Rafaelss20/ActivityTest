import { Router } from "express";
import { firstController } from "./controller/FirstController";
import { Request, Response } from "express";
import { CreateUser } from "./routers/signupRouter";
import { product } from "./database/model/product";
import { getproducts } from "./database/products";



const router: Router = Router()

// const createUserService = new CreateUserService
const createUser = new CreateUser
//Routes
router.get("/", firstController.loginUser);
router.get("/create", firstController.createUser);
router.get("/home", (req: Request, res: Response) => {
  const products = getproducts()
  res.render("home", { post: products})
}
);

router.post('/createUserForm', (req: Request, res: Response) => {
  createUser.save(req, res)
})

export { router };