import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll(); // Return the list of categories from the service
  }

  // // Fetch a category by ID
  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<Category> {
  //   return this.categoryService.findOne(id);
  // }

  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  // @Delete('/:id') // Dynamic route parameter 'id'
  // //When a function doesn't return any value, it's marked as void to indicate that no result is expected from it.
  // async deleteCategory(@Param('id') id: number): Promise<void> {
  //   // Call the service to delete the category
  //   return this.categoryService.deleteOneCategory(id);
  // }
}
