import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getHello(): string {
    return this.categoryService.getHello();
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll(); // Return the list of categories from the service
  }

  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.create(categoryDto);
  }
}
