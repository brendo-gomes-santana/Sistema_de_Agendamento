import { Request, Response,  NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string
}

export function Auth (req: Request, res:Response, next:NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({error: 'Informe o token'})
    }

    const [_, token] = authToken.split(' ')

    try{
        const { sub } = verify(token, '40ea851007f3f2bcdc26c64b206919fe') as Payload;
        req.valicao_id = sub


        return next();
    }catch(err){
        return res.status(401).end()
    }


} 