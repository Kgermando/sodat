import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironnementController } from './environnement.controller';
import { EnvironnementService } from './environnement.service';
import { Environnement } from './models/environnement.entity';
import { UploadEnvFileController } from './upload-env-file.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Environnement])],
  controllers: [
    EnvironnementController,
    UploadEnvFileController
],
  providers: [EnvironnementService]
})
export class EnvironnementModule {}
