import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

class sessionDentistaService{
    async execute(email: string, password: string){

        if(!email || !password){
            throw new Error('Preenchar todos os campos')
        }

        const dentista = await prismaClient.dentista.findFirst({
            where: { email }
        })
        if(!dentista || !dentista.status){
            throw new Error('Usuário não existe')
        }

        const verificandoSenha = await compare(password, dentista.password)

        if(!verificandoSenha){
            throw new Error('Senha Incorreta')
        }

        const token = sign(
            {
                nome: dentista.nome,
            },
            '40ea851007f3f2bcdc26c64b206919fe',
            {
                subject: dentista.id,
                expiresIn: '15d'
            }
        )
        
        return {
            id: dentista.id,
            nome: dentista.id,
            email: dentista.email,
            token: token
        }
    }
}

export { sessionDentistaService }
