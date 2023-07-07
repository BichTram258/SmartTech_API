import { IsString } from 'class-validator';

export class CreateHistoryDto {
  @IsString()
  name: string;
}
