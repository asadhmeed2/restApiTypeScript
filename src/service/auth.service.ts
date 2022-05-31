import { DocumentType } from "@typegoose/typegoose";
import { createSessionHandler } from "../controller/auth.controller";
import SessionModel from "../model/session.model";
import { User } from "../model/user.model";
import { signJwt } from "../utils/jwt";

export async function createSession({userId}:{userId:string}){
return SessionModel.create({user:userId})
}


export async function signRefreshToken({userId}:{userId:string}){
    const session = await createSession({
        userId
    })
}


export function signAccessToken(user: DocumentType<User>){
    const payload =user.toJSON();

    const accessToken = signJwt(payload,"accessTokenPrivatekey");
    
    return accessToken;
}