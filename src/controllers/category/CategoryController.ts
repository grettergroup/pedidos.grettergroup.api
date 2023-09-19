import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CategoryController{
    
    async handler(req: Request, res: Response){
        try{
            const {name} = req.body

            const createCategoryService = new CreateCategoryService();

            const category =  await createCategoryService.execute(name);

            return res.json(category);
        }catch(error){
            return res.status(400).send({error: error.message});
        }
    }
}

export { CategoryController }