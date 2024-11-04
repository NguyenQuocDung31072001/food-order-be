// cloudinary.service.ts

import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary-response';
import { createReadStream } from 'streamifier';

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          console.log('error', error);
          console.log('result', result);
          if (error) return reject(error);
          resolve(result as any);
        },
      );

      createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async deleteFile(public_id: string): Promise<any> {
    const response = await cloudinary.uploader.destroy(public_id, {
      invalidate: true,
      resource_type: 'image',
    });
    return response;
  }
}
