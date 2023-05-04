import { Request, Response } from "express";
import { DemitidoRhService } from "../../services/Rh/DemitidoRhService";

class DemitidoRhController{
    async handle(req: Request, res: Response){

        const {  funcionario } = req.body;
        const id = req.valicao_id;

        const demitidorhservice = new DemitidoRhService();
        const returno = await demitidorhservice.execute(id, funcionario)

        return res.json(returno)
    }
}

export { DemitidoRhController };