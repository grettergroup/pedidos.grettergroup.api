import prismaClient from "../../prisma";

class AddItemService{
    async execute(order_id: string, product_id: string, amount: number){

        const order = await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        })
        
        return order;
    }
}

export { AddItemService }