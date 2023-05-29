import prismaClient from "../../prisma";

class ListPorUserService{
    async execute(user_id: string, status: boolean){

        if(!user_id || status === undefined ){
            throw new Error('preenchar todos os campos')
        }

        const lista = await prismaClient.agendamento.findMany({
            where: {
                user_id: user_id ,
                status 
            },
           include: {
            user: {
                select: {
                    id: true,
                    nome: true,
                    contato: true,
                    email:true,
                    endereco:true
                }
            },
            dentista: {
                select: {
                    id:true,
                    nome:true,
                    contato: true,
                    email:true,
                    endereco:true
                }
            },
            servico:{
                select: {
                    id:true,
                    nome:true
                }
            }
           },
        })

        return lista

    }
}

export { ListPorUserService }