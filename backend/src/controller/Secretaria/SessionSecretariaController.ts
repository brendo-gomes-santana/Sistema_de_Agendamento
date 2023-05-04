import { Request, Response } from "express";

import { SessionSecretariaService } from "../../services/Secretaria/SessionSecretariaService";

class SessionSecretariaController{
    async handle(req: Request, res: Response){
        const { nome, password } = req.body;

        const sessionSecretaria = new SessionSecretariaService();
        const session = await sessionSecretaria.execute(nome, password)

        return res.json(session)
    }
}

export { SessionSecretariaController }