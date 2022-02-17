import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  public messages = [
    {
      id: 1,
      text: 'message 1',
    },
    {
      id: 2,
      text: 'message 2',
    },
  ];

  findAll() {
    return this.messages;
  }
}
