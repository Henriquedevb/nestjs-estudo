import { Injectable } from '@nestjs/common';
import { IMessage } from './interface.messages';

@Injectable()
export class MessagesService {
  public messages: IMessage[] = [
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

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: IMessage) {
    return this.messages.push(message);
  }

  update(id: number, message: IMessage) {
    const index = this.messages.findIndex(
      (message: IMessage) => message.id === id,
    );

    this.messages[index] = message;

    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex(
      (message: IMessage) => message.id === id,
    );

    this.messages.splice(index, 1);

    return true;
  }
}
