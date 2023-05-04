import prismaClient from "../../prisma";

class DemitidoRhService{
    async execute(funcionario: string){

        const VerificadoSeJaFoiDemitido = await prismaClient.rH.findFirst({
            where: { id: funcionario }
        })
        if(!VerificadoSeJaFoiDemitido?.status){
            throw new Error('Esse funcário já foi demitido')
        }


        const demetido = await prismaClient.rH.update({
            where: { id: funcionario },
            data: { status: false }
        })
        

        return demetido;
    }
}

export { DemitidoRhService };