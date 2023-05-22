import { Request, Response } from "express";
import { createAgendamentoService } from "../../services/agendamento/createAgendamentoService";

class createAgendamentoController{
    async handle(req: Request, res: Response){

        const { 
            descricao,
            valor,
            data_do_agendamento,
            user_id,
            dentista_id,
            servico_id
         } = req.body

        const inicializacao = new createAgendamentoService()
        const agendado = await inicializacao.execute({
            descricao,
            valor,
            data_do_agendamento,
            user_id,
            dentista_id,
            servico_id
        })

        return res.json(agendado)
    }
}

export { createAgendamentoController }