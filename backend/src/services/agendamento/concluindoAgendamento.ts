import prismaClient from "../../prisma";

class concluindoAgendamento{
    async execute(agendamento_id: string){
        if(!agendamento_id){
            throw new Error('Informe o agendamento')
        }
        const remove = await prismaClient.agendamento.update({
            where: { id: agendamento_id },
            data: {
                status: true
            }
        })
        
        return remove
    }
}

export { concluindoAgendamento }