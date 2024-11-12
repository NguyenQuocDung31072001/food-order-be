import { Crud, CrudController } from '@dataui/crud';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthServices } from './auth.services';

@Controller('auth')
export class AuthController {
  constructor(public service: AuthServices) {}

  @Post('login')
  async login(@Body() body: any) {
    try {
      return this.service.login(body);
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  @Post('register')
  async register(@Body() body: any) {
    try {
      return this.service.register(body);
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
}
