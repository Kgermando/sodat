import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    NotFoundException,
    Post,
    Req,
    Res,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './models/register.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) { }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Le mot de passe ne match pas!');
        }
        const hashed = await bcrypt.hash(body.password, 12);
        return this.usersService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            matricule: body.matricule,
            password: hashed,
            // role: { id: 1 },
            created: body.created
        });
    }

    @Post('login')
    async login(
        @Body('matricule') matricule: string,
        @Body('password') password: string,
        @Res({ passthrough: true }) response: Response,
    ) {
        const user = await this.usersService.findOne({ matricule });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!(await bcrypt.compare(password, user.password))) {
            throw new BadRequestException('Invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({ id: user.id });

        response.cookie('jwt', jwt, { 
            httpOnly: true,
            sameSite: 'lax'
        });

        return user;
    }

    @UseGuards(AuthGuard)
    @Get('user')
    async user(@Req() request: Request) {
        const cookie = request.cookies['jwt'];
        const data = await this.jwtService.verifyAsync(cookie);

        return this.usersService.findOne({ id: data['id'] });
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Res({ passthrough: true }) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'Success',
        };
    }

}
