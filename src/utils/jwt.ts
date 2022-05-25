import  jwt  from "jsonwebtoken";
import config from "config";

export function signJwt(object:object, keyName: 'accessTokentPrivateDey'| 'refreshTokenPrivateKey', options?:jwt.SignOptions| undefined){
    const signingKey = config.
}

export function verifyJwt() {

}