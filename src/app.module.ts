import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoURI } from './config/db.config';
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, MongooseModule.forRoot(mongoURI)],
})
export class AppModule {}
