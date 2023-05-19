import prismaClient from "../../prisma";

class demissaoDentistaService{
    async execute(id_dentista: string){

        if(!id_dentista){
            throw new Error('Informe seu id do dentista')
        }

        const DemissaoJaOcorreu = await prismaClient.dentista.findFirst({
            where: { id: id_dentista }
        })

        if(!DemissaoJaOcorreu){
            throw new Error('Esse funcionário já foi demitido')
        }

        const demissao = await prismaClient.dentista.update({
            where: { id: id_dentista},
            data: {
                status: false
            }
        })

        return demissao
    }
}
export { demissaoDentistaService }