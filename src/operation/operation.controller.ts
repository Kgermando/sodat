import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OpCreateDto } from './models/op-create.dto';
import { OpUpdateDto } from './models/op-update.dto';
import { OperationService } from './operation.service';

@Controller('operation')
export class OperationController {
    constructor(private operationService: OperationService) { }

    @Get()
    async getallEnv(@Query('page') page = 1) {
        return this.operationService.paginate(page);
    }

    @Post()
    async createEnv(@Body() body: OpCreateDto) {
        return this.operationService.create(body);
    }

    @Get(':id')
    async getOneEnv(@Param('id') id: number) {
        return this.operationService.findOne({ id });
    }

    @Put(':id')
    async updateEnv(
        @Param('id') id: number,
        @Body() body: OpUpdateDto
    ) {
        await this.operationService.update(id, body);
        return this.operationService.findOne({ id });
    }

    @Delete(':id')
    async deleteEnv(
        @Param('id') id: number,
    ) {
        return this.operationService.delete(id);
    }
}
