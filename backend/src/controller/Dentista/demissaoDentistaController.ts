import { Request, Response } from "express"

import { demissaoDentistaService } from "../../services/Dentista/demissaoDentistaService"

class demissaoDentistaController{
    async handle(req: Request, res: Response){

        const  id_dentista  = req.query.id_dentista as string
 
        const inicializacao = new demissaoDentistaService()
        const demissao = await inicializacao.execute(id_dentista)
        
        return res.json(demissao)
    }
}

export { demissaoDentistaController }