import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(email: string, pass: string) {
    const emailDoEnv = process.env.ADMIN_EMAIL;
    const senhaDoEnv = process.env.ADMIN_PASS;

    if (email === emailDoEnv && pass === senhaDoEnv) {
      return {
        email: email,
        name: 'Joãozinho',
        token: 'fake-jwt-token-123',
      };
    }

    throw new UnauthorizedException('Usuário ou senha inválidos');
  }
}