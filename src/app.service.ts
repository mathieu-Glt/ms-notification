import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './notification/dto/create-notification.dto';
import { UpdateNotificationDto } from './notification/dto/update-notification.dto';

@Injectable()
export class AppService {
  async create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  async findAll() {
    return `This action returns all notification`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  async remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
