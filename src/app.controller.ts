import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//ponto de partida da api e como se fosse um component

// /app virou a rota inicial
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //metodos
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
