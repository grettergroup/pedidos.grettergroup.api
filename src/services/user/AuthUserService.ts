import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken"

interface AuthRequest{
    email: string;
    password: string;
}


class AuthUserService{
    async execute({email, password}: AuthRequest){
        //verificar se email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Usuário ou senha incorreto.");
        }

        //Verificar se a senha estpa correto
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Usuário ou senha incorreto.");
        }

        // se deu tudo certo , vamos gerar o token do usuário 
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
                process.env.JWT_SECRET,
            {
                subject:user.id,
                expiresIn: '30d'
            }

            
        )

        return { 
            id: user.id, 
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export { AuthUserService };