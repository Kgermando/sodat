import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Administration } from './models/administration.entity';

@Injectable()
export class AdministrationService extends AbstractService {
    constructor(
        @InjectRepository(Administration) private readonly adminRepository: Repository<Administration>,
    ) {
        super(adminRepository)
    }
}
