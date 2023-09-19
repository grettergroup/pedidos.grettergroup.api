import prismaClient from "../../prisma";

class SendOrderService{
    async execute(id: string){

        const order = await prismaClient.order.update({
            where: {
                id : id
            }, 
            data: {
                draft: false
            },
        })

        return order;
    }
}

export { SendOrderService }