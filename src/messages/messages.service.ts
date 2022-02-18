import { Injectable } from '@nestjs/common';
import { IMessage } from './interface.messages';
import { MessageDto } from './messages.dto';

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

  async findById(id: number) {
    const message = this.messages.find((message) => message.id === id);

    if (!message) {
      throw Error('Messagem nao encontrada');
    }

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const newMessage = {
      id,
      ...messageDto,
    };
    return this.messages.push(newMessage);
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
