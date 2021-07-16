import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { AdminCreateDto } from './models/admin-create.dto';
import { AdminUpdateDto } from './models/admin-update.dto';

@Controller('administration')
export class AdministrationController {
    constructor(private adminService: AdministrationService) { }

    @Get()
    async getallEnv(@Query('page') page = 1) {
        return this.adminService.paginate(page);
    }

    @Post()
    async createEnv(@Body() body: AdminCreateDto) {
        return this.adminService.create(body);
    }

    @Get(':id')
    async getOneEnv(@Param('id') id: number) {
        return this.adminService.findOne({ id });
    }

    @Put(':id')
    async updateEnv(
        @Param('id') id: number,
        @Body() body: AdminUpdateDto
    ) {
        await this.adminService.update(id, body);
        return this.adminService.findOne({ id });
    }

    @Delete(':id')
    async deleteEnv(
        @Param('id') id: number,
    ) {
        return this.adminService.delete(id);
    }

}
