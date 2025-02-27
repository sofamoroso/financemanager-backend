import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntryDto } from './dto/create-entry.dto';
// import { UpdateEntryDto } from './dto/update-entry.dto';
import { Entry } from './entities/entry.entity';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>, // Inject the repository
  ) {}

  // 'This action adds a new entry'
  create(createEntryDto: CreateEntryDto) {
    const entry = this.entryRepository.create(createEntryDto);
    return this.entryRepository.save(entry);
  }

  findAll() {
    return `This action returns all entries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entry`;
  }

  // update(id: number, updateEntryDto: UpdateEntryDto) {
  //   return `This action updates a #${id} entry`;
  // }

  remove(id: number) {
    return `This action removes a #${id} entry`;
  }
}
