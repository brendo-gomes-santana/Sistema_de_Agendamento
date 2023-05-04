import prismaClient from "../../prisma";
import  { hash } from 'bcryptjs';

interface DadosDeCadastroProps {
    rh_id: string,
    nome: string,
    contato: string,
    endereco: string,
    password: string
}


class CreateSecretariaService{
    async execute({rh_id,nome, contato, endereco, password}: DadosDeCadastroProps){

        //verificar se quem tá cadastrado é realmente do RH.
        const validacao = await prismaClient.rH.findFirst({
            where:{id: rh_id}
        })
        if(!validacao){
            throw new Error('Você não é do RH.')
        }
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