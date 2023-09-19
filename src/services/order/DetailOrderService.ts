import prismaClient from "../../prisma";

class DetailOrderService {
    async execute(id : string){

        const order = await prismaClient.item.findMany({
           where: {
            order_id : id
           },
           include:{
            product: true,
            order: true
           }
        })

        return order;

    }
}

export { DetailOrderService }