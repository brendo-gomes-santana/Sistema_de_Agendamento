import { Request, Response } from "express";
import { DemitidoRhService } from "../../services/Rh/DemitidoRhService";

class DemitidoRhController{
    async handle(req: Request, res: Response){

        const {  funcionario } = req.body;

        const demitidorhservice = new DemitidoRhService();
        const returno = await demitidorhservice.execute(funcionario)

        return res.json(returno)
    }
}

export { DemitidoRhController };