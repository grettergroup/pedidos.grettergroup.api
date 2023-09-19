import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){

        //verificar se enviou um email
        if(!email){
            throw new Error("Email incorreto");
        }

        //Consulta usuário pelo email 
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email : email
            }
        })
        //verificar se o email enviado já está cadastrado no banco de dados
        if(userAlreadyExists){
            throw new Error("Usuário já cadastrado!");
        }

        const passwordHash = await hash(password, 8);

        //Cadastra usuário no banco de dados ... Select define quais dados retornam após insert
        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash
            }, 
            select:{
                id:true,
                name: true,
                email:true
            }
        })
       
        return user;
    }
}

export { CreateUserService }