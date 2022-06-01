import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { errorhandler, successhandler } from 'src/helper/response/response.handler';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<CreateProductDto>){}
  async create(createProductDto: CreateProductDto) {
      try{
          const product = new this.productModel({
              name: createProductDto.name,
              price: createProductDto.price,
              quantity: createProductDto.quantity
          });
          const result = await product.save();
          return successhandler(result, 'Success');
      } catch(err){
          return errorhandler(400, JSON.stringify(err.message));
      }
  };

  async findAll(){
    try{
        const result = await this.productModel.find().exec();
        return successhandler(result as CreateProductDto[], 'Success');
    } catch(err){
        return errorhandler(400, JSON.stringify(err.message));
    }
  };

  async findOne(id: string) {
    try{
        const result = await this.productModel.findOne({_id: id});
        return successhandler(result as CreateProductDto, 'Success');
    } catch(err){
        return errorhandler(400, JSON.stringify(err.message));
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try{
        await this.productModel.findOneAndUpdate({_id: id}, updateProductDto);
        return successhandler({}, 'Success');
    } catch(err){
        return errorhandler(400, JSON.stringify(err.message));
    }
  }

  async remove(id: string) {
    try{
        await this.productModel.findOneAndDelete({_id: id});
        return successhandler({}, 'Success');
    } catch(err){
        return errorhandler(400, JSON.stringify(err.message));
    }
  }
}
