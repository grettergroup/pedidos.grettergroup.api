import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../services/product/ListProductByCategoryService";

class ListProductByCategoryController{
    async handler(req: Request, res: Response){
        const category_id = req.query.category_id as string;

        console.log("category_id" , category_id);

        const listProductByCategoryService = new ListProductByCategoryService();
        
        const product = await listProductByCategoryService.execute(category_id);

        return res.status(200).send(product);
    }
}

export { ListProductByCategoryController }