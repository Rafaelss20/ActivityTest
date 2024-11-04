import { Request, Response } from "express";
import { getproducts } from "../database/products";


class FirstController {
  public createUser(req: Request, res: Response) {
    return res.render("signup")
  }
  public loginUser(req: Request, res: Response){
    return res.render("login")
  }
  public homer(req: Request, res: Response){
    const products =  getproducts()
    return res.render("home", { post: products})
  }
}

export const firstController = new FirstController();
