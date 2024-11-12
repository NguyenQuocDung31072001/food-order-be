import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { JwtService } from '@nestjs/jwt';
import { config } from 'src/config';

@Injectable()
export class AuthServices {
  constructor(
    @InjectRepository(Customer)
    public repo: Repository<Customer>,
    private jwtService: JwtService,
  ) {}

  async login(body: any) {
    const { email, password } = body;
    const existUser = await this.repo.findOne({ where: { email, password } });
    if (!existUser) {
      throw new Error('Email not found');
    }
    const generateToken = await this.getAccessTokens(
      existUser.id,
      existUser.email,
      existUser.role,
    );
    const { password: userPassword, ...userData } = existUser;
    return {
      ...userData,
      accessToken: generateToken.accessToken,
    };
  }

  async register(body: any) {
    const { username, email, password } = body;
    if (!username || !email || !password) {
      throw new Error('Please provide username, email, and password');
    }
    const existEmail = await this.repo.findOne({ where: { email } });
    if (existEmail) {
      throw new Error('Email already exists');
    }
    await this.repo.save(body);
    return this.repo.findOne({ where: { email } });
  }

  async getAccessTokens(userId: string, email: string, role: string) {
    const accessToken = await this.jwtService.signAsync(
      {
        userId,
        email,
        role,
      },
      {
        secret: config.JWT_SECRET_TOKEN,
        expiresIn: '1d',
      },
    );

    return {
      accessToken,
    };
  }
}
