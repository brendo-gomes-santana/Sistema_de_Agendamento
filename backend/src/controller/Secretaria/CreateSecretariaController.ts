import { Request, Response } from "express"
import { CreateSecretariaService } from "../../services/Secretaria/CreateSecretariaService";

class CreateSecretariaController{
    async handle(req: Request, res: Response){

        const { nome, contato, endereco, password } = req.body

        const createSecretaria = new CreateSecretariaService();
        const create = await createSecretaria.execute({
            nome,
            contato,
            endereco, 
            password
        })

        return res.json(create)
    }
}

export { CreateSecretariaController }