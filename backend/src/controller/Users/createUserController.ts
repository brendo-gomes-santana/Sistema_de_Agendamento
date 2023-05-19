import { Request, Response } from "express";
import { createUserService } from "../../services/User/createUserService";

class createUserController{
    async handle(req: Request, res: Response){

        const { nome, 
            contato,
            email,
            endereco,
            password } = req.body

        const  id_geral  = req.valicao_id
            
        const inicializacao = new createUserService()
        const cadastramento = await inicializacao.execute({
            id_geral,
            nome, 
            contato,
            email,
            endereco,
            password 
        })

        return res.json(cadastramento)
    }
}

export { createUserController }