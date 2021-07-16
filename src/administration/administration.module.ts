import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrationController } from './administration.controller';
import { AdministrationService } from './administration.service';
import { Administration } from './models/administration.entity';

@Module({
  controllers: [AdministrationController],
  imports: [TypeOrmModule.forFeature([Administration])],
  providers: [AdministrationService]
})
export class AdministrationModule {}
