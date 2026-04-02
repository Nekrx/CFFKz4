import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ListsModule } from './lists/lists.module';
import { PrismaModule } from './prisma/prisma.module';
/* --- ADICIONE ESTAS DUAS IMPORTAÇÕES ABAIXO --- */
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    AuthModule,
    ListsModule,
    PrismaModule,
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class AppModule {}