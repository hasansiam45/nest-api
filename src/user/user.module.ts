import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";
import { UserSchema } from "./user.model";
import { UserService } from "./user.service";

@Module ({
    imports: [MongooseModule.forFeature([{name: 'Auth', schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}