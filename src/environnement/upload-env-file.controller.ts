import { Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';

@Controller()
export class UploadEnvFileController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename(_, file, callback) {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return callback(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    uploadFile(@UploadedFile() file) {
        console.log(file);
        return {
            url: `http://localhost:3000/api/${file.path}`
        }
    }

    @Post('upload-image')
    @UseInterceptors(FilesInterceptor('image', 5, {
        storage: diskStorage({
            destination: './uploads',
            filename(_ , file, callback) {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return callback(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
        console.log(files);
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
                path: file.path
            };
            response.push(fileReponse);
        });
        return response;
    }



    @Get('upload/:path')
    async getImage(
        @Param('path') path,
        @Res() res: Response
    ) {
        res.sendFile(path, {root: 'uploads'});
    }
}
