import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // https://docs.nestjs.com/techniques/validation#auto-validation
  // https://github.com/typestack/class-validator
  @IsNotEmpty()
  name: string;

  email: string;

  password: string;

  phone: string;

  address: string;

  image: string;
}
