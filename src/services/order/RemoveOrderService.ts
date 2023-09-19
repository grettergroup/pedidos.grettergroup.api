import prismaClient from "../../prisma";

class RemoveOrderService{
    async execute(id: string){

        const order = await prismaClient.order.delete({
            where: {
                id: id
            }
        })

        return order;
    }
}

export {RemoveOrderService }