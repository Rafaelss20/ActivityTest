import { Request, Response } from "express";
import { resCreateUser } from "../routers/model/ResModelCreateUser";

class FirstController {
  public createUser(req: Request, res: Response) {
    let result = new resCreateUser()
    return res.render("createuser")
  }
  public loginUser(req: Request, res: Response){
    return res.render("login")
  }
}

export const firstController = new FirstController();
