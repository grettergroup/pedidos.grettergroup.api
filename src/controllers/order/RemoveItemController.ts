import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController{
    async handler(req : Request, res : Response){

        const item_id = req.query.item_id as string;

        try{
            const removeItemService = new RemoveItemService()

            const item = await removeItemService.execute(item_id);

            return res.json(item);

        }catch(error){
            return res.status(400).json({error: error.message});
        }

        
    }
}

export { RemoveItemController }