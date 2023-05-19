import { NextFunction, Request, Response } from "express";
import prismaClient from "../prisma";

export async function VerificarFunc(req: Request, 
    res: Response, next: NextFunction){
        const id = req.valicao_id

        const VerificarFunc = await prismaClient.user.findFirst({
            where: { id }
        })

        if(VerificarFunc){
            return res.status(401).json({
                error: 'Você não faz parte de equipe de funcionário'
            })
        }
        
    return next()
}

