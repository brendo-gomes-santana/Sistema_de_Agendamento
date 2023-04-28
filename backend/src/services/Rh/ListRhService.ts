import prismaClient from "../../prisma";

class ListRhService {
    async execute(status:boolean, id:string){

        const rh = await prismaClient.rH.findFirst({
            where: { id }
        })
        if(!rh){
            throw new Error('Você não é do RH')
        }

        const list = await prismaClient.rH.findMany({
            where: { status },
            select: { 
                id: true, 
                nome: true,
                email: true,
                contato: true,
                status: true
             }
        })

        return list;
    }
}

export { ListRhService }