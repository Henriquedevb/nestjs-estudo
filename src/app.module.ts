import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ProdutosModule } from './produtos/produtos.module';

import { MongooseModule } from '@nestjs/mongoose';

//ponto de partida

@Module({
  imports: [
    MessagesModule,
    ProdutosModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
