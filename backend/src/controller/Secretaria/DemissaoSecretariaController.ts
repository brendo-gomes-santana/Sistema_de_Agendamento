import { Request, Response } from "express";

import { DemissaoSecretariaService } from "../../services/Secretaria/DemissaoSecretariaService";

class DemissaoSecretariaController{
    async handle(req: Request, res: Response){
        const { funcionario } = req.body 
        const demissaoSecretaria = new DemissaoSecretariaService();
        const demissa = await demissaoSecretaria.execute(funcionario)

        return res.json(demissa)
    }
}

export { DemissaoSecretariaController }