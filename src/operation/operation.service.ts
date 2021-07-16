import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Operation } from './models/ooperation.entity';

@Injectable()
export class OperationService extends AbstractService{

    constructor(
        @InjectRepository(Operation) private readonly opRepository: Repository<Operation>,
    ) {
        super(opRepository)
    }
}
