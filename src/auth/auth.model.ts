import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

export class IAuth {
    id: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}