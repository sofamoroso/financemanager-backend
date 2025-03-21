import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], //registers the User entity as a repository.
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
