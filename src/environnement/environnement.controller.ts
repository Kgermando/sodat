import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EnvironnementService } from './environnement.service';
import { EnvCreateDto } from './models/env-create.dto';
import { EnvUpdateDto } from './models/env-update.dto';

@Controller('environnement')
export class EnvironnementController {

    constructor(private envirenementService: EnvironnementService) {}

    @Get()
    async getallEnv(@Query('page') page = 1) {
        return this.envirenementService.paginate(page); 
    }

    @Post()
    async createEnv(@Body() body: EnvCreateDto) {
        return this.envirenementService.create(body);
    }

    @Get(':id')
    async getOneEnv(@Param('id') id: number) {
        return this.envirenementService.findOne({id});
    }

    @Put(':id')
    async updateEnv(
        @Param('id') id: number,
        @Body() body: EnvUpdateDto
    ) {
        await this.envirenementService.update(id, body);
        return this.envirenementService.findOne({id});
    }

    @Delete(':id')
    async deleteEnv(
        @Param('id') id: number,
    ) {
        return this.envirenementService.delete(id);
    }


}
