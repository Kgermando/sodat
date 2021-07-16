import { Get, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { PaginatedResult } from 'src/common/paginate-result.interface';
import { Repository } from 'typeorm';
import { Environnement } from './models/environnement.entity';

@Injectable()
export class EnvironnementService extends AbstractService{

    constructor(
        @InjectRepository(Environnement) private readonly envRepository: Repository<Environnement>,
    ) {
        super(envRepository)
    }

    
}
