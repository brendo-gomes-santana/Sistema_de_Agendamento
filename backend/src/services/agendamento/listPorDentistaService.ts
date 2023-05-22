import prismaClient from "../../prisma";

class listPorDentistaService{
    async execute(dentista_id: string){

        const listaPorDentista = await prismaClient.agendamento.findMany({
            where: { 
                dentista_id,
                status: false
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
                servico:{
                    select: {
                        id:true,
                        nome:true
                    }
                }
               }
        })

        return listaPorDentista
    }
}

export { listPorDentistaService }

