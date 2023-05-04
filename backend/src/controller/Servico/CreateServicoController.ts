import { Request, Response } from "express";

import { CreateServicoService } from "../../services/Servico/CreateServicoService";

class CreateServicoController{
    async handle(req: Request, res: Response){
        const { nome } = req.body;

        const createservico = new CreateServicoService();
        const cadastrado = await createservico.execute(nome)

        return res.json(cadastrado)
    }
}

export { CreateServicoController }