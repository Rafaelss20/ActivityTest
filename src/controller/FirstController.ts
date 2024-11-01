import { Request, Response } from "express";
import { resCreateUser } from "../routers/model/ResModelCreateUser";

class FirstController {
  public createUser(req: Request, res: Response) {
    return res.render("signup")
  }
  public loginUser(req: Request, res: Response){
    return res.render("login")
  }
  public homer(req: Request, res: Response){
    return res.render("home")
  }
}

export const firstController = new FirstController();
