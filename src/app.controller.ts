import { Body, Controller, Get, HttpException, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { execute } from './shared/functions/shell.function';
import * as fs from "fs";
import { join } from 'path';
import * as rawbody from 'raw-body';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  async getHello() {
    return await execute('python main.py');
  }

  @Post('process')
  async process(@Req() req) {
    const raw = await rawbody(req);
    const text = raw.toString();
    var base64Data = text.replace(/^data:image\/png;base64,/, "");
    const path = join(__dirname, '..', 'images', 'image.png')
    console.log(path)

    fs.writeFileSync(path, base64Data, 'base64');
    const response = JSON.parse(await execute('python main.py'));
    if (response.result === true) {
      return response;
    } else {
      throw new HttpException('Pose não reconhecida!', 400);
    }
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    fs.writeFileSync(join(__dirname, '..', 'images', 'image.png'), file.buffer);
  }

}
