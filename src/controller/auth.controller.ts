import { Request, Response } from "express";
import { CreateSessionInput } from "../schema/auth.schema";
import { signAccessToken, signRefreshToken } from "../service/auth.service";
import { findUserByEmail } from "../service/user.service";

export async function createSessionHandler(req: Request<{},{},CreateSessionInput>,res:Response){
    
    const message = "Invalid email or password";
    const {email,password} =req.body;

    const user = await findUserByEmail(email);


    if(!user){
        return res.json({message: message});
    }

    if(!user.verified){
        return res.json({message: "Please verify your email"});
    }

    const isValid = await user.validatePassword(password);

    if(!isValid){
        return res.json({message});
    }

    const accessToken = signAccessToken(user);

    const refreshToken = await signRefreshToken({
        userId:user._id
    })


}