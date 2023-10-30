import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handler(req: Request, res: Response){
        const listCategoryService = new ListCategoryService();

        const listCategory = await listCategoryService.execute();

        return res.json(listCategory);
       
    }
}

export { ListCategoryController }