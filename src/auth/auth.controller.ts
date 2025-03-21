import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UsersService } from 'src/user/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService, // AuthService for login/auth
    private usersService: UsersService, // UsersService for user creation
  ) {}

  @Post('signup') //POST auth/signup
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto); //calls create method, the password is hashed in usersService
  }
}
