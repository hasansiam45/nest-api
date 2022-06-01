import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { errorhandler, successhandler, unauthorized } from "src/helper/response/response.handler";
import { ISignup } from "./auth.model";

@Injectable({})
export class AuthService {
    constructor(@InjectModel('Auth') private readonly authModel: Model<ISignup>){}
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
    async signin(username: string, password: string){
        try{
            const user = await this.authModel.findOne({username: username});
            if(user){
                if(user.password === password){
                    return successhandler({}, 'Successfully Logged in!');
                }else{
                    return unauthorized();
                }
            }else{
                return errorhandler(404, 'User does not exist');
            }
        } catch(err){
            console.log('',err.response);
            return errorhandler(400, JSON.stringify(err.message));
        }
    }
}