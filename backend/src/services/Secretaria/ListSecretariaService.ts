import prismaClient from "../../prisma";

class ListSecretariaService{
    async execute(status:boolean){

        const list = await prismaClient.secretaria.findMany({
            where: { status }
        })

        return list;
    }
}

export { ListSecretariaService }