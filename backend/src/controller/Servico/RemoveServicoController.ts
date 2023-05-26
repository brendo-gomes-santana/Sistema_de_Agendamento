import { Request, Response } from "express";

import { RemoveServicoServico } from "../../services/Servico/RemoveServicoServico";
class RemoveServicoController{
    async handle(req: Request,res: Response){
        const  id_servico  = req.query.id_servico as string

        const removeservico = new RemoveServicoServico();
        const remove = await removeservico.execute(id_servico)

        return res.json(remove)
    }
}

export { RemoveServicoController }