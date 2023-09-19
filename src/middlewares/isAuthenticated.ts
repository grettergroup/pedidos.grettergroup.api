import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function isAuthenticated(req: Request, res: Response, next: NextFunction)
{
    //Recebe token
    const authToken = req.headers.authorization;

    try{
        if(authToken){
            const [,token] = authToken.split(" ");

            const  retorno = verify(token,process.env.JWT_SECRET);

            //Colocar id do usuário dentro do request
            req.user_id = retorno.sub.toString();

            return next();
        }
        else{
            throw new Error("Acesso negado");
        }
    }catch(error){

        return res.status(401).send({error: error.message});
    }
}