import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Min(1)
  @Type(() => Number)
  page: number;

  @IsOptional()
  @IsPositive()
  @Min(1)
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsString()
  name: string;
}
