import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        text: 'message 1',
      },
      {
        id: 2,
        text: 'message 2',
      },
    ];
  }
}
