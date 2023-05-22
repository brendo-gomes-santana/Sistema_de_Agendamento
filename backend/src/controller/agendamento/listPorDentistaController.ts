import { Request, Response } from "express";
import { listPorDentistaService } from "../../services/agendamento/listPorDentistaService";

class listPorDentistaController{
    async show(req: Request, res: Response){
        const dentista_id = req.query.dentista_id as string

        const inicializacao = new listPorDentistaService()
        const listaPorDentista = await inicializacao.execute(dentista_id)

        return res.json(listaPorDentista)

    }
}

export { listPorDentistaController }