import prismaClient from "../../prisma";

class RemoveItemService {
    async execute(id : string){

        
        if(!id){
            throw new Error("Erro ao excluir item");
        }

        const item = await prismaClient.item.delete({
            where: {
                id : id
            }
        });

        return item;
    }
}

export { RemoveItemService }