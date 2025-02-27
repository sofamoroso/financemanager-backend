import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    // console.log('gotta fetch them all');
    return this.categoryService.findAll(); // Return the list of categories from the service
  }

  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  // DELETE request to delete category by ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log('Deleting category with id:', id); // Debugging
    return this.categoryService.remove(id);
  }
}
