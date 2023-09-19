import prismaClient from "../../prisma";

class CreateOrderService{
    async execute(table: number, name: string){

        const order = prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        })
        return order;
    }
}

export { CreateOrderService };