import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/createCategory.dto';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>, // Inject the repository
  ) {}

  //insert new category
  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  // Fetch all categories
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find(); // This will get all categories from the database
  }

  // Delete category by ID
  async remove(id: number): Promise<void> {
    const categoryId = Number(id);
    const result = await this.categoryRepository.delete(categoryId);
    if (result.affected === 0) {
      throw new Error('Category not found');
    }
  }

  // async findOne(id: number): Promise<Category> {
  //   const category = await this.categoryRepository.findOne({
  //     where: { id },
  //   });
  //   if (!category) {
  //     throw new Error('Category not found');
  //   }
  //   return category;
  // }
}
