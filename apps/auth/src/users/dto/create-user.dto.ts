import { IsEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsEmpty()
    username: string;

    @IsString()
    @IsEmpty()
    password: string;
}
