import { Request, Response } from "express";

import { CreateRhService } from "../../services/Rh/CreateRhService";
class CreateRhController {
    async handle(req: Request, res: Response){

        const { nome, email, contato, endereco, password, codigo } = req.body;

        const createrhservice = new CreateRhService();

        const rh = await createrhservice.execute({
            nome, 
            email,
            contato,
            endereco,
            password,
            codigo
        });

        return res.json(rh)
    }
}

export { CreateRhController };