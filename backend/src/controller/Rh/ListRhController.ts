import { Request, Response } from "express";
import { ListRhService } from "../../services/Rh/ListRhService";

class listRhController {
    async handle(req: Request, res:Response) {

        const status = req.body.status
        const id = req.valicao_id;

        const listrhservice = new ListRhService();
        const list = await listrhservice.execute(status, id);


        return res.json(list)
    }
}

export { listRhController }