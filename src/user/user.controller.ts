import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Get('all')
    findAll(){
        return this.userService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id : string){
        return this.userService.findOne(id);
    }
}