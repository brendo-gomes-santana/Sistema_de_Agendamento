import prismaClient from "../../prisma";

class RemoveServicoServico{
   async  execute(id_servico:string){
        const NaoExisteServico = await prismaClient.servico.findFirst({
            where: { id: id_servico }
        })

        if(!NaoExisteServico){
            throw new Error('Serviço já foi deletado!')
        }

        const remove = await prismaClient.servico.delete({
            where: { id: id_servico },
            select: {
                id: true,
                nome: true
            }
        })

        return remove
    }
}

export { RemoveServicoServico }