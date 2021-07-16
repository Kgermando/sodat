import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './models/ooperation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operation])],
  providers: [OperationService],
  controllers: [OperationController]
})
export class OperationModule {}
