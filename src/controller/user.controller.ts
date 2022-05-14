import {Request,Response} from 'express';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
export async function createUserHandler(req: Request<{},{},CreateUserInput>, res: Response){
    const body = req.body;

    try{
        const user = await createUser(body);
        return res.status(200).json({
            message: 'User successfully created',
        })
    }catch(err: any){
        if(err.code === 11000){
            return res.status(409).json({
                message: 'Account already exists'
            })
        }

        return res.status(500).json({
            message: err.message
        })
    }
}