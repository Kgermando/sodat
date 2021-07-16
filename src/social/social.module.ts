import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Social } from './models/social.entity';
import { SocialController } from './social.controller';
import { SocialService } from './social.service';

@Module({
  imports: [TypeOrmModule.forFeature([Social])],
  controllers: [SocialController],
  providers: [SocialService]
})
export class SocialModule {}
