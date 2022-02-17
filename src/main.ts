import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//nesse aquivo fica o inicio da aplicacao
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
