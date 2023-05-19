import { Request, Response } from "express";

import { listDentistaService } from "../../services/Dentista/listDentistaService";

class listDentistaController{
    async show(req: Request, res: Response){
        const inicializacao = new listDentistaService()
        const lista = await inicializacao.execute()

        return res.json(lista)
    }
}

export { listDentistaController }