import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { AuthSchema } from "./auth.model";
import { AuthService } from "./auth.service";

@Module ({
    imports: [MongooseModule.forFeature([{name: 'Auth', schema: AuthSchema}])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}