import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoURI } from './config/db.config';
import { ProductModule } from './product/product.module';
import { CommentsModule } from './comments/comments.module';
@Module({
  imports: [MongooseModule.forRoot(mongoURI), AuthModule, UserModule, ProductModule, CommentsModule],
})
export class AppModule {}
