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
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((message) => message?.id === id);

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

  async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex(
      (message: IMessage) => message?.id === id,
    );

    if (index < 0) {
      throw Error('Message not found');
    }

    const newMessage = {
      id,
      ...messageDto,
    };

    this.messages[index] = newMessage;

    return newMessage;
  }

  async delete(id: number) {
    const index = this.messages.findIndex(
      (message: IMessage) => message?.id === id,
    );

    if (index < 0) {
      throw Error('Message not found');
    }

    this.messages.splice(index, 1);
    return true;
  }
}
