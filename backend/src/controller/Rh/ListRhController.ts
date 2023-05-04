import { Request, Response } from "express";
import { ListRhService } from "../../services/Rh/ListRhService";

class listRhController {
    async show(req: Request, res:Response) {

        const status = req.body.status


        const listrhservice = new ListRhService();
        const list = await listrhservice.execute(status);

        return res.json(list)
    }
}

export { listRhController }