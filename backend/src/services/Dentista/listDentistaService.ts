import prismaClient from "../../prisma";

class listDentistaService {
    async execute(){
        const lista = await prismaClient.dentista.findMany({
            where: { status: true },
            select: {
                id: true,
                nome: true,
                contato: true,
                email: true,
                data_de_nascimento: true,
                status: true,
            }
        })
    return lista
    }
}

export { listDentistaService }