import { Request, Response } from "express";

import { createDentistaService } from "../../services/Dentista/createDentistaService";
class createDentistacontroller {
    async handle(req: Request, res: Response){
        const { nome, 
            contato,
            email,
            data_de_nascimento,
            endereco,
            password }  = req.body

            const inicializar = new createDentistaService()
            const dentista = await inicializar.execute({
                nome,
                contato,
                email,
                data_de_nascimento,
                endereco,
                password
            })

        return res.json(dentista)
    }
}

export { createDentistacontroller }