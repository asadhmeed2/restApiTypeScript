import { getModelForClass, prop, Prop, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";

export class Session {
    @Prop({ref:()=> User})
    user:Ref<User>
    @prop({default:true})
    valid:boolean ;
}

const SessionModel = getModelForClass(Session,{
    schemaOptions:{
        timestamps : true,
    }
})

export default SessionModel;