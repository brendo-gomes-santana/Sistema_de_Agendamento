import { Request, Response } from "express";

import { ListServico } from "../../services/Servico/ListServico";

class ListServicoController {
    async show(req: Request, res: Response){

        const listservico = new ListServico();
        const lista = await listservico.execute()

        return res.json(lista)

    }
}

export { ListServicoController }