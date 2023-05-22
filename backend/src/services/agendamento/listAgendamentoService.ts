import prismaClient from "../../prisma";

class listAgendamentoService{
    async execute(){
        const listandoAgendamento = await prismaClient.agendamento.findMany({
            where: { status: false },
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

        return listandoAgendamento
    }
}

export { listAgendamentoService }