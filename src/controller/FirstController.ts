import { Request, Response } from "express";
import { bag } from "../database/model/carBuy";

class FirstController {
  public createUser(req: Request, res: Response) {
    return res.render("createuser")
  }
  public loginUser(req: Request, res: Response){
    return res.render("login")
  }
  public carbuy(req: Request, res: Response){
    return res.render("carbuy", {itens: bag})
  }
}

export const firstController = new FirstController();
