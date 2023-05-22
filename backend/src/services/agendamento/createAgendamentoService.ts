import prismaClient from "../../prisma";

interface AgendamentoProps{
    descricao: string,
    valor: string,
    data_do_agendamento: string

    user_id: string,
    dentista_id: string,
    servico_id: string
}

class createAgendamentoService{
    async execute({
        descricao,
        valor,
        data_do_agendamento,
        user_id,
        dentista_id,
        servico_id
    }: AgendamentoProps){
        if(!descricao || !valor || !data_do_agendamento 
            || !user_id || !dentista_id || !servico_id){
            throw new Error('Preenchar todos os campos')
        }

        const agendamento = await prismaClient.agendamento.create({
            data: {
                descricao,
                valor,
                data_do_agendamento,
                user_id,
                dentista_id,
                servico_id
            },
            select:{
                id: true,
                descricao: true,
                valor: true,
                data_do_agendamento: true,
                user_id: true,
                dentista_id: true,
                servico_id: true
            }
        })
        return agendamento
    }
}

export { createAgendamentoService }