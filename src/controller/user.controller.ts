import {Request,Response} from 'express';
import { CreateUserInput, VerifyUserInput } from '../schema/user.schema';
import { createUser, findUserById } from '../service/user.service';
import { sendEmail } from '../utils/mailer';

export async function createUserHandler(req: Request<{},{},CreateUserInput>, res: Response){
    const body = req.body;

    try{
        const user = await createUser(body);
        await sendEmail({
            from: 'test@example.com',
            to:user.email,
            subject: "Please verify your account",
            text: `verification conde ${user.verificationCode}. Id : ${user._id}`,
        });
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

export async function verifyUserHandler(req: Request<VerifyUserInput>, res: Response){
const id=req.params.id;
const verificationCode = req.params.verificationCode;

const user = await findUserById(id);



if(!user){
    return res.json({message: 'Could not verify user'})
}

if(user.verified){
    return res.json({
        message:'User is already verified'
    })
}

if (user.verificationCode === verificationCode) {
    user.verified =true;

    await user.save()
    return res.json({
        message:'User successfully verified'
    })
}

return res.json({
    message:'Could not verify user'
})



}