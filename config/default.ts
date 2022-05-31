export default {
    port: 3000,
    dbUrl: 'mongodb://localhost:27017/user-api',
    logLevel: "info",
    smtp:{
        user: 'ee4ju35ujomklubf@ethereal.email',
        pass: 'NWyZSd9GuEC2qHktWU',
        host:'smtp.ethereal.email',
        port:587,
        secure: false,
        accessTokenPrivateDey: process.env.SECRITE_TOKEN,
        refreshTokenPrivateKey: process.env.REFRESH_TOKEN,
        accessTokenPublicKey: process.env.PUBLIC_SECRITE_TOKEN,
        refreshTokenPublicKey: process.env.PUBLIC_REFRESH_TOKEN
    }
}