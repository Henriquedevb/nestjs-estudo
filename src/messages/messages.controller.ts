import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IMessage } from './interface.messages';
import { MessageDto } from './messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() message: IMessage) {
    return this.messagesService.update(+params.id, message);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id);
  }
}
