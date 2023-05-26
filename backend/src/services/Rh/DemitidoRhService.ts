import prismaClient from "../../prisma";

class DemitidoRhService{
    async execute(id_rh: string){

        const VerificadoSeJaFoiDemitido = await prismaClient.rH.findFirst({
            where: { 
                id: id_rh,
                status:true 
            }
        })
        if(!VerificadoSeJaFoiDemitido?.status){
            throw new Error('Esse funcário já foi demitido')
        }


        const demetido = await prismaClient.rH.update({
            where: { 
                id: id_rh
            },
            data: { status: false }
        })
        

        return demetido;
    }
}

export { DemitidoRhService };