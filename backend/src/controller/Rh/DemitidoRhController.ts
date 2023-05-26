import { Request, Response } from "express";
import { DemitidoRhService } from "../../services/Rh/DemitidoRhService";

class DemitidoRhController{
    async handle(req: Request, res: Response){

        const  id_rh  = req.body.id_rh as string

        const demitidorhservice = new DemitidoRhService();
        const returno = await demitidorhservice.execute(id_rh)

        return res.json(returno)
    }
}

export { DemitidoRhController };