import { Body, Controller, Post } from "@nestjs/common";
import { IAuth } from "./auth.model";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Body() createUser: IAuth){
        return this.authService.signup(createUser.username, createUser.password);
    }

    @Post('signin')
    signin(){
        return this.authService.signin()
    }
}