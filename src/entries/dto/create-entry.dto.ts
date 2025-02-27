// DTOs Represent Data Sent from the Client, that's why we don't need ID
import { Category } from 'src/category/entities/category.entity';

export class CreateEntryDto {
  title: string;

  amount: number;

  category: Category;
}
