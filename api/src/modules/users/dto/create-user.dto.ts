import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  // https://docs.nestjs.com/techniques/validation#auto-validation
  // https://github.com/typestack/class-validator
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  phone: string;

  address: string;

  image: string;
}
