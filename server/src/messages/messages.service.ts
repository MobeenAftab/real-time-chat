import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [];
  clientToUser = {};

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      username: this.clientToUser[clientId],
      message: createMessageDto.message,
    };
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }

  addClientToRoom(name: string, id: string) {
    this.clientToUser[id] = name;
    const users = Object.values(this.clientToUser);
    return users;
  }

  getClientById(clientId: string) {
    return this.clientToUser[clientId];
  }
}
