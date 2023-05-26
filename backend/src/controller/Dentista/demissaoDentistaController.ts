import { Request, Response } from "express"

import { demissaoDentistaService } from "../../services/Dentista/demissaoDentistaService"

class demissaoDentistaController{
    async handle(req: Request, res: Response){

        const  id_dent  = req.body.id_dent as string
 
        const inicializacao = new demissaoDentistaService()
        const demissao = await inicializacao.execute(id_dent)
        
        return res.json(demissao)
    }
}

export { demissaoDentistaController }