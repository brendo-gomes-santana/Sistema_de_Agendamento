import { Request, Response } from "express";
import { ListRhService } from "../../services/Rh/ListRhService";


class listRhController {
    async show(req: Request, res:Response) {

        const  stts  = req.query.status as string
        const status = stts === 'true'
        
        const listrhservice = new ListRhService();
        const list = await listrhservice.execute(status);

        return res.json(list)
    }
}

export { listRhController }

