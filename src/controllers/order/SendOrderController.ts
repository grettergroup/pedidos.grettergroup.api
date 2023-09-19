import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController{
    async handler(req: Request, res: Response){
        const {order_id} = req.body;

        const sendORderService = new SendOrderService();

        const order = await sendORderService.execute(order_id);

        return res.json(order);
    }
}

export { SendOrderController }