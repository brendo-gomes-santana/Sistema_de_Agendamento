import prismaClient from "../../prisma";


class ListServico {
    async execute(){
        const list = await prismaClient.servico.findMany({
            select: {
                id: true,
                nome:true
            }
        })
        return list
    }
}

export { ListServico }