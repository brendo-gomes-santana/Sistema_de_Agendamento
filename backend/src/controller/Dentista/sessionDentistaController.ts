import { Request, Response } from "express";
import { sessionDentistaService } from "../../services/Dentista/sessionDentistaService";

class sessionDentistaController{
    async hadnle(req: Request, res: Response) {
        const { email, password } = req.body

        const inicializando = new sessionDentistaService()
        const sessionDentista = await inicializando.execute(email, password)

        return res.json(sessionDentista)
    }
}

export { sessionDentistaController }