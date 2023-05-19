import { Request, Response } from "express";

import { listUserService } from "../../services/User/listUserService";

class listUserController{
    async show(req: Request, res: Response){

        const inicializacao = new listUserService()

        const listando = await inicializacao.execute()

        return res.json(listando)

    }
}

export { listUserController }