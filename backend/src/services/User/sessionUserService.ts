import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class sessionUserService{
    async execute(email: string, passsword: string){

        if(!email || !passsword){throw new Error('Preenchar as informações')}

        const existeuser = await prismaClient.user.findFirst({
            where: { email }
        })
        if(!existeuser){throw new Error('Usuário não existe')}

        const senhaCorreta = await compare(passsword, existeuser.password)

        if(!senhaCorreta){throw new Error('Senha incorreta')}

        const token = sign(
            {
                nome: existeuser.nome
            },
            '40ea851007f3f2bcdc26c64b206919fe',
            {
                subject: existeuser.id,
                expiresIn: '15d'
            }
        )

        return {
            id: existeuser.id,
            nome: existeuser.nome,
            email: existeuser.email,
            token: token
        }
    }
}

export { sessionUserService }