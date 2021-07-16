import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SocialCreateDto } from './models/social-create.dto';
import { SocialUpdateDto } from './models/social-update.dto';
import { SocialService } from './social.service';

@Controller('social')
export class SocialController {
    constructor(private socialService: SocialService) { }

    @Get()
    async getallEnv(@Query('page') page = 1) {
        return this.socialService.paginate(page);
    }

    @Post()
    async createEnv(@Body() body: SocialCreateDto) {
        return this.socialService.create(body);
    }

    @Get(':id')
    async getOneEnv(@Param('id') id: number) {
        return this.socialService.findOne({ id });
    }

    @Put(':id')
    async updateEnv(
        @Param('id') id: number,
        @Body() body: SocialUpdateDto
    ) {
        await this.socialService.update(id, body);
        return this.socialService.findOne({ id });
    }

    @Delete(':id')
    async deleteEnv(
        @Param('id') id: number,
    ) {
        return this.socialService.delete(id);
    }
}
