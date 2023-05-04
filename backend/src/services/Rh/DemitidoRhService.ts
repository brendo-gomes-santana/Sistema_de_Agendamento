import prismaClient from "../../prisma";

class DemitidoRhService{
    async execute(id:string, funcionario: string){

        const verificacaoSeEDoRH = await prismaClient.rH.findFirst({
            where: { id }
        })

        if(!verificacaoSeEDoRH){
            throw new Error('Você não é da equipe do RH.')
        }

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