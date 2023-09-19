
import prismaClient from "../../prisma";

class ListProductByCategoryService {
    async execute(category_id: string){
        
        const product = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select:{
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true
            }
        })
        return (product);
    }
}

export { ListProductByCategoryService }