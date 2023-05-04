import prismaClient from "../../prisma";

class CreateServicoService {
    async execute(nome:string){
         if(!nome){
            throw new Error('Informe o nome do serviço')
         }
         
         
         const verificar = await prismaClient.servico.findFirst({
            where: { nome }
         })

         if(verificar){
            throw new Error('Serviço já existe!')
         }

         const cadastrado = await prismaClient.servico.create({
            data: {nome},
            select: {
                id: true, 
                nome: true
            }
         })

         return cadastrado;
    }
}

export { CreateServicoService }