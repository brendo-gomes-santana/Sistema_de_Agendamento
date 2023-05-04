import prismaClient from "../../prisma";

class DemissaoSecretariaService {
    async execute(funcionario:string){
        const cartaDeDemissao = await prismaClient.secretaria.update({
            where: { id: funcionario },
            data: {
                status: false
            }
        })

        return cartaDeDemissao;
    }
}

export { DemissaoSecretariaService }