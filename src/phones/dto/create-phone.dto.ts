import { IsString } from 'class-validator';

export class CreatePhoneDto {
  @IsString()
  name: string;
}
