import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { errorhandler, successhandler } from 'src/helper/response/response.handler';
import { IComment } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comment') private readonly commentModel: Model<IComment>){}
  async create(createCommentDto: CreateCommentDto) {
    try{
        const comment = new this.commentModel({
            comment: createCommentDto.comment
        });
        const result = await comment.save();
        return successhandler(result, 'Success');
    } catch(err){
        return errorhandler(400, JSON.stringify(err.message));
    }
  };

  async findAll(){
    try{
        const result = await this.commentModel.find().exec();
        return successhandler(result as CreateCommentDto[], 'Success');
    } catch(err){
        return errorhandler(400, JSON.stringify(err.message));
    }
  };

}
