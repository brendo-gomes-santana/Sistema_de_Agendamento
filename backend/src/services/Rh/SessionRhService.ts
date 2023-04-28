import prismaClient from "../../prisma"
import { sign } from 'jsonwebtoken';
import { compare } from "bcryptjs";

import 'dotenv';

class SessionRhService {
    async execute(email:string, password:string){

        if(!email || !password){
            throw new Error('Coloque um email/senha')
        }

        const Verificar = await prismaClient.rH.findFirst({
            where: {email}
        })

        if (!Verificar){
            throw new Error('Email/senha não existe')
        }

        const SenhaCorreta = compare(password, Verificar.password);

        if(!SenhaCorreta){
            throw new Error('Senha Incorreta')
        }

        const token = sign(
            {
                nome: Verificar.nome,
                email: Verificar.email,
            },
            process.env.JWT_SECRET,
            {
                subject: Verificar.id,
                expiresIn: '15d'
            }
        )


        return {ok:true}
    }
}

export { SessionRhService }