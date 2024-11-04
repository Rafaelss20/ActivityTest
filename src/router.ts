import { Router } from "express";
import { firstController } from "./controller/FirstController";
import { Request, Response } from "express";

import { bag } from "./database/model/carBuy";
import { CreateUser } from "./routers/signupRouter";
import { getproducts } from "./database/products";


const router: Router = Router()

// const createUserService = new CreateUserService
const createUser = new CreateUser
//Routes
router.get("/", firstController.loginUser);
router.get("/create", firstController.createUser);
router.get("/carbuy", (req: Request, res: Response) => {
    console.log(bag);
    res.render('carbuy', {itens: bag})
});
router.get("/home", (req: Request, res: Response) => {
  const products = getproducts()
  res.render("home", { products: products })
});

router.post('/createUserForm', (req: Request, res: Response) => {
  createUser.save(req, res)
})

export { router };