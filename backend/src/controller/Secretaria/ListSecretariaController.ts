import { Request, Response } from "express";

import { ListSecretariaService } from "../../services/Secretaria/ListSecretariaService";

class ListSecretariaController {
    async show(req: Request, res: Response){
        const  stts  = req.query.status as string
        const status = stts === 'true'

        const listsecretaria = new ListSecretariaService();
        const lista = await listsecretaria.execute(status)

        return res.json(lista)
    }
}

export { ListSecretariaController }