import { Request, Response } from "express";

import { ListSecretariaService } from "../../services/Secretaria/ListSecretariaService";

class ListSecretariaController {
    async show(req: Request, res: Response){
        const { status } = req.body;

        const listsecretaria = new ListSecretariaService();
        const lista = await listsecretaria.execute(status)

        return res.json(lista)
    }
}

export { ListSecretariaController }