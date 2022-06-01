import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiTags } from "@nestjs/swagger";
import { ISignin, ISignup } from "./auth.model";
import { AuthService } from "./auth.service";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @ApiBadRequestResponse()
    @Post('signup')
    signup(@Body() createUser: ISignup){
        return this.authService.signup(createUser.username, createUser.password);
    }

    @Post('signin')
    signin(@Body() signinUser: ISignin){
        return this.authService.signin(signinUser.username, signinUser.password);
    }
}