import { Injectable } from '@nestjs/common';

//funcao de banco de dados e algo do tipo vao ficar aqui

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
