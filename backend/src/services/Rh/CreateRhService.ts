import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface RH {
    nome: string,
    email: string,
    contato: string,
    endereco: string,
    password: string,
    codigo: string,
}

class CreateRhService {
    async execute({nome, email, contato, endereco, password, codigo }: RH){
        
        //verificar se já tem um email existe.
        const EmailExiste = await prismaClient.rH.findFirst({
            where: { 
                email,
                status:true 
            }
        })
        if(EmailExiste){
            throw new Error('Email já existe')
        }

        //codigo para criar um rh - esse codigo vai ficar com o chefe.
        if(codigo != '123456789'){
            throw new Error('codigo de criação errado')
        }

        const password_hash = await hash(password, 10);

        const CreateRH = await prismaClient.rH.create({
            data: {
                nome, 
                email,
                contato,
                enderco: endereco,
                password: password_hash
            },
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })


        return CreateRH;
    }
}

export { CreateRhService }