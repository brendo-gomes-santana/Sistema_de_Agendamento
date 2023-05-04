import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class SessionSecretariaService{
    async execute(nome:string, password: string){

        const secretaria = await prismaClient.secretaria.findFirst({
            where: { nome }
        })
        if(!secretaria){
            throw new Error('Você não possui cadastro')
        }
        if(secretaria.status != true){
            throw new Error('Você não é  mais funcionário')
        }

        const SenhaCorreta = await compare(password, secretaria.password);
        if(!SenhaCorreta){
            throw new Error('Senha Incorreta')
        }
        const token = sign(
            {
                nome: secretaria.nome,
            },
            '40ea851007f3f2bcdc26c64b206919fe',
            {
                subject: secretaria.id,
                expiresIn: '15d'
            }
        )

        return { 
            id: secretaria.id,
            nome: secretaria.nome,
            token
        }
    }
}

export { SessionSecretariaService }