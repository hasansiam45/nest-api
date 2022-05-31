import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { errorhandler, successhandler } from "src/helper/response/response.handler";
import { IUser } from "./user.model";

@Injectable({})
export class UserService {
    constructor(@InjectModel('Auth') private readonly userModel: Model<IUser>){}
    async findAll(){
        try{
            const result = await this.userModel.find().exec();
            return successhandler(result as IUser[], 'Success');
            
        } catch(err){
            return errorhandler(400, JSON.stringify(err.message));
        }
    };

    async findOne(id: string){
        try{
            const result = await this.userModel.findOne({_id: id});
            return successhandler(result as IUser, 'Success');
            
        } catch(err){
            return errorhandler(400, JSON.stringify(err.message));
        }
    }
};