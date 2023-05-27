import { Request, Response } from "express";

import { concluindoAgendamento } from "../../services/agendamento/concluindoAgendamento";

class concluindoAgendamentoController{
    async handle(req: Request, res: Response){
        
        const agendamento_id = req.query.agendamento_id as string

        const inicializacao = new concluindoAgendamento()
        const remove = await inicializacao.execute(agendamento_id)

        return res.json(remove)
    }
}

export { concluindoAgendamentoController }