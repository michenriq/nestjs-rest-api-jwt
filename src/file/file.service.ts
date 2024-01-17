import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs';

@Injectable()
export class FileService {
  async upload(file: Express.Multer.File, path: string) {
    console.log(file);
    return writeFile(path, file.buffer, (err) => console.log);
  }
}
