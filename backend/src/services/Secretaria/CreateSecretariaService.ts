import prismaClient from "../../prisma";
import  { hash } from 'bcryptjs';

interface DadosDeCadastroProps {
    nome: string,
    contato: string,
    endereco: string,
    password: string
}


class CreateSecretariaService{
    async execute({nome, contato, endereco, password}: DadosDeCadastroProps){


        const password_hash = await hash(password, 10)

        const createSec = await prismaClient.secretaria.create({
            data: {
                nome,
                contato,
                endereco,
                password: password_hash
            },
            select:{
                id: true,
                nome: true, 
                contato: true,
            }
        })


        return createSec;
    }
}

export { CreateSecretariaService }