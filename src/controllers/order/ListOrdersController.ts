import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController{
    async handler(req:  Request, res: Response){
        const listOrderService = new ListOrdersService();

        const orders = await listOrderService.execute();

        return res.json(orders);
    }
}

export { ListOrdersController }