import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
interface InforUserProps {
    id_geral: string
    nome: string,
    contato: string,
    email: string,
    endereco: string,
    password: string
}

class createUserService{
    async execute({
        id_geral,
        nome,
        contato,
        email,
        endereco,
        password
    }: InforUserProps){
        
        if(!nome || !contato || !email || !endereco || !password){
            throw new Error('Preenchar todas as informações.')
        }

        const dentista = await prismaClient.dentista.findFirst({
            where: { id: id_geral }
        })
        const user = await prismaClient.user.findFirst({
            where: { id: id_geral }
        })
        const existeUser = await prismaClient.user.findFirst({
            where: { email }
        })

        if(existeUser){throw new Error('Usuário já existe')}

        if(dentista || user){throw new Error('Só quem pode cadastrar User é secretária e RH.')}

        const cadastramento = await prismaClient.user.create({
            data: {
                nome,
                contato,
                email,
                endereco,
                password: await hash(password, 10)
            },
            select: {
                id: true,
                nome: true,
                contato: true,
                email: true,
                endereco: true
            }
        })

        return cadastramento
        
    }
}

export { createUserService }