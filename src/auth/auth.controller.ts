import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IAuth } from "./auth.model";
import { AuthService } from "./auth.service";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Body() createUser: IAuth){
        return this.authService.signup(createUser.username, createUser.password);
    }

    @Post('signin')
    signin(@Body() signinUser: IAuth){
        return this.authService.signin(signinUser.username, signinUser.password);
    }
}