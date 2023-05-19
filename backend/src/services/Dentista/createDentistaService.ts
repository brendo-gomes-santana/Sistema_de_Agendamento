import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface createDentistaProps {
    nome: string,
    contato: string,
    email: string,
    data_de_nascimento: string,
    endereco: string 
    password: string
}
class createDentistaService{
    async execute({
        nome,
        contato,
        email,
        data_de_nascimento,
        endereco,
        password
    }: createDentistaProps){
        const dentista = await prismaClient.dentista.findFirst({
            where: { email }
        })
        if(dentista) {
            throw new Error('Usuário já existe')
        }

        const cadastramento = await prismaClient.dentista.create({
            data: {
                nome,
                contato,
                email,
                data_de_nascimento,
                endereco,
                password: await hash(password, 10)
            },
            select: {
                nome: true,
                contato: true,
                email: true,
                data_de_nascimento: true
            }
        })

        return cadastramento
    }
}

export { createDentistaService }