import { Request, Response } from "express";

import { DemissaoSecretariaService } from "../../services/Secretaria/DemissaoSecretariaService";

class DemissaoSecretariaController{
    async handle(req: Request, res: Response){
        const { id_sec } = req.body
        const demissaoSecretaria = new DemissaoSecretariaService();
        const demissa = await demissaoSecretaria.execute(id_sec)

        return res.json(demissa)
    }
}

export { DemissaoSecretariaController }