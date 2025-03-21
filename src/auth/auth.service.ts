import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';
import * as bcrypt from 'bcrypt';
// import { UserEntity } from 'src/user/entities/users.entity';
// import { JwtPayload } from './jwt-payload.interface'; // You will define this interface

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return user;
  }

  // 1. Signup: send DTO to database

  // 2. Login function
  // async login(user: UserEntity) {
  //   const payload: JwtPayload = {
  //     username: user.username,
  //     password: user.password,
  //   };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  // Validate user during login (could use plain email/password check or hashed passwords)
  // async validateUser(username: string, password: string): Promise<UserEntity> {
  //   const user = await this.usersService.findOneByEmail(email);
  //   if (user && user.password === password) {
  //     // Here you would compare hashed password normally
  //     return user;
  //   }
  //   return null;
  // }
}
