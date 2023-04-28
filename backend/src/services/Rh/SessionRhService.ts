import prismaClient from "../../prisma"
import { sign } from 'jsonwebtoken';
import { compare } from "bcryptjs";

class SessionRhService {
    async execute(email:string, password:string){

        if(!email || !password){
            throw new Error('Coloque Senha/Email')
        }
        
        const verificar = await prismaClient.rH.findFirst({
            where: {
                email: email
            }
        })

        if(!verificar){
            throw new Error('Email/senha não existe')
        }

        if(verificar.status != true){
            throw new Error('Usuário com status false.')
        }

        const SenhaCorreta = await compare(password, verificar.password);
        if(!SenhaCorreta){
            throw new Error('Senha Incorreta')
        }

        const token = sign(
            {
                nome: verificar.nome,
                email: verificar.email,
            },
            '40ea851007f3f2bcdc26c64b206919fe',
            {
                subject: verificar.id,
                expiresIn: '15d'
            }
        )


        return {
            id: verificar.id,
            nome: verificar.nome,
            email: verificar.email,
            token: token
        }
    }
}

export { SessionRhService }