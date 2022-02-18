import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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
  findById(@Param('id', ParseIntPipe) id) {
    return this.messagesService.findById(id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id, @Body() messageDto: MessageDto) {
    return this.messagesService.update(id, messageDto).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.messagesService.delete(id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }
}
