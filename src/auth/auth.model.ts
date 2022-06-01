import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty, MaxLength } from 'class-validator';
import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

export class ISignup {
    id: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    username: string;
    @ApiProperty()
    @MaxLength(7)
    password: string;
}

export class ISignin {
    @ApiProperty()
    @IsNotEmpty()
    username: string;
    @ApiProperty()
    password: string;
}