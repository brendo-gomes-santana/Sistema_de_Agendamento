import prismaClient from "../../prisma";

class ListRhService {
  async execute(status: boolean) {
    const list = await prismaClient.rH.findMany({
      where: {
        status: status
      },
      select: {
        id: true,
        nome: true,
        email: true,
        contato: true,
        status: true
      }
    });

    return list;
  }
}

export { ListRhService };
