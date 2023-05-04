import { Request, Response, NextFunction } from "express";
import prismaClient from "../prisma";

export async function ValidarRH(req: Request, res: Response, next: NextFunction){
    const id = req.valicao_id;

    const validacao = await prismaClient.rH.findFirst({
        where: { id }
    })

    if(!validacao){
        return res.status(401).json({
            error: 'Você não é da equipe do RH.'
        })
    }

    return next()
}