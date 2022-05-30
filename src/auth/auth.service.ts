import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { errorhandler, successhandler } from "src/helper/response/response.handler";
import { IAuth } from "./auth.model";

@Injectable({})
export class AuthService {
    constructor(@InjectModel('Auth') private readonly authModel: Model<IAuth>){}
    async signup(username: string, password: string){
        try{
            const user = new this.authModel({
                username,
                password
            });
            const result = await user.save();
            return successhandler(result, 'Success');
        } catch(err){
            return errorhandler(400, JSON.stringify(err.message));
        }
    }
    signin(){
        return 'Logged in...'
    }
}