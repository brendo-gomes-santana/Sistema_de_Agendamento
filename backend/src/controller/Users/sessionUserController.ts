import { Request, Response } from "express";
import { sessionUserService } from "../../services/User/sessionUserService";

class sessionUserController{
    async handle(req: Request, res: Response){
        
        const { email, password } = req.body;


        const inicializacao = new sessionUserService()
        const sission = await inicializacao.execute(email, password)

        return res.json(sission)
    }
}

export { sessionUserController }