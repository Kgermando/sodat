import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Social } from './models/social.entity';

@Injectable()
export class SocialService extends AbstractService {
    constructor(
        @InjectRepository(Social) private readonly socialRepository: Repository<Social>,
    ) {
        super(socialRepository)
    }
}
