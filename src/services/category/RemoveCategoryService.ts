import prismaClient from "../../prisma"

class RemoveCategoryService{
    
   async execute(category_id : string){
       if(!category_id){
           throw new Error("Informe a categoria");
       }

       const categoryAlreadyExists = await prismaClient.category.findFirst({
           where : {
               id : category_id
           }
       })

       if(!categoryAlreadyExists){
           throw new Error("Categoria inexistente")
       }
       
       const category = await prismaClient.category.delete({
           where: {
               id : category_id
           }
       })

       return category;
   }
}

export { RemoveCategoryService }