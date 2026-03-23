import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(email: string, pass: string) {
    if (email === 'joaozinho@gmail.com' && pass === '123456') {
      return {
        email: email,
        name: 'Joãozinho',
        token: 'fake-jwt-token-123',
      };
    }
    throw new UnauthorizedException('Usuário ou senha inválidos');
  }
}