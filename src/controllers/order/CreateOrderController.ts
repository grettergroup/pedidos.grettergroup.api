import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handler(req: Request, res: Response){
        const {table, name} = req.body;

        console.log(table, name); 

        const createOrderService = new CreateOrderService()

        const order = await createOrderService.execute(table,name);

        return res.json(order);

    }
}

export { CreateOrderController };