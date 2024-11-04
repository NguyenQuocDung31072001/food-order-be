// app.controller.ts
import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './cloudinary.services';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('file[]', 5))
  async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    const result = [];
    for (const file of files) {
      result.push(await this.cloudinaryService.uploadFile(file));
    }

    return result;
  }

  @Delete(':public_id')
  deleteImage(@Param('public_id') public_id: string) {
    return this.cloudinaryService.deleteFile(public_id);
  }
}
