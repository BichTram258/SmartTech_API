import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { ROLE } from '../entities/user.entity';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';

export class UpdateUserDto extends PartialType(SignUpDto) {
  @IsString()
  @IsOptional()
  @IsEnum(ROLE)
  role?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
