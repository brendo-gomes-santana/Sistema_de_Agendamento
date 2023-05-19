import prismaClient from "../../prisma";

class listUserService{
    async execute(){

        const lista = await prismaClient.user.findMany({
            select: {
                id: true,
                nome: true,
                contato: true,
                email: true,
                endereco: true,
            }
        })

        return lista
    }
}

export { listUserService }