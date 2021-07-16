import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
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

  created: Date;
}
