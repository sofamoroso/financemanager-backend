// DTOs Represent Data Sent from the Client, that's why we don't need ID
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
