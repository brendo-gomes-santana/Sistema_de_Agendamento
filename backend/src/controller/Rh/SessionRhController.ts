import { Request, Response } from "express";
import { SessionRhService } from "../../services/Rh/SessionRhService";

class SessionRhController {
    async handle(req: Request, res: Response){
        const { email, password } = req.body;
        
        const sessionrhservice = new SessionRhService();
        
        const sessionRh = await sessionrhservice.execute(email, password);

        return res.json(sessionRh)
    }
}

export { SessionRhController };