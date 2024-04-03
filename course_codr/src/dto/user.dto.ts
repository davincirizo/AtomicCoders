import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { BaseDto } from "./base.dto";

export class UserDto extends BaseDto{

    @IsNotEmpty()
    @IsString()
    userName!: string

    @IsNotEmpty()
    @IsEmail()
    email! : string

    @IsNotEmpty()
    @IsStrongPassword()
    password!  : string
}