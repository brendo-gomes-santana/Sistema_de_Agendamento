import { Request, Response } from "express";
import { listAgendamentoService } from "../../services/agendamento/listAgendamentoService";

class listAgendamentoController{
    async show(req: Request, res: Response){

        const inicializacao = new listAgendamentoService()
        const lista = await inicializacao.execute()

        return res.json(lista)
    }
}

export { listAgendamentoController }