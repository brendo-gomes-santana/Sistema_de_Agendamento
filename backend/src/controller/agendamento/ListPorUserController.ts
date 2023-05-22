import { Request, Response } from "express";
import { ListPorUserService } from "../../services/agendamento/ListPorUserService";

class ListPorUserController{
    async show(req: Request, res: Response){

        const user_id = req.query.user_id as string
        const status = req.body.status as boolean

        const inicializacao = new ListPorUserService()
        const listaPorUser = await inicializacao.execute(user_id, status)

        return res.json(listaPorUser)
    }
}

export { ListPorUserController }