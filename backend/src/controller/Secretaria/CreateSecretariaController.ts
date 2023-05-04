import { Request, Response } from "express"
import { CreateSecretariaService } from "../../services/Secretaria/CreateSecretariaService";

class CreateSecretariaController{
    async handle(req: Request, res: Response){

        const { nome, contato, endereco, password } = req.body
        const rh_id = req.valicao_id;

        const createSecretaria = new CreateSecretariaService();
        const create = await createSecretaria.execute({
            rh_id,
            nome,
            contato,
            endereco, 
            password
        })

        return res.json(create)
    }
}

export { CreateSecretariaController }