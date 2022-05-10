import mongoose from "mongoose";
import config from "config";
import log from "./logger";

export async function connectToDb(){
    const dbUrl = config.get<string>('dbUrl');
    try{
        await mongoose.connect(dbUrl);
        log.info("connected to database");
    }catch(err){
        process.exit(1)
    }
}
