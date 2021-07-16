import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    matricule: string;

    // @IsNotEmpty()
    // roleId: number;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    password_confirm: string;

    created: Date;
}
