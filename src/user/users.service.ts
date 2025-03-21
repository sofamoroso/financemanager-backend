import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>, // Inject the repository
  ) {}

  //create new user
  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = this.userRepository.create({
      ...createUserDto, // Spread operator: {username, email, password}
      password: hashedPassword, // replace password wit hashedPassword
    });
    return this.userRepository.save(user); // Never save passwords in clear text!
  }

  // Find user by id
  async findUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  // Find user by email
  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { email: email } });
  }
}
