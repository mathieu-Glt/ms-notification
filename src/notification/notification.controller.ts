// import { Controller } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { NotificationService } from './notification.service';
// import { CreateNotificationDto } from './dto/create-notification.dto';
// import { UpdateNotificationDto } from './dto/update-notification.dto';

// @Controller()
// export class NotificationController {
//   constructor(private readonly notificationService: NotificationService) {}

//   @MessagePattern('SEND_EMAIL_FORGOT_PASSWORD')
//   create(@Payload() data: any) {
//     console.log('SEND_EMAIL_FORGOT_PASSWORD');
//     console.log("data - SEND_EMAIL_FORGOT_PASSWORD", data);
    
    
//     // return this.notificationService.create(createNotificationDto);
//   }

//   @MessagePattern('SEND_EMAIL')
//   findAll() {

//     // return this.notificationService.findAll();
//   }

//   @MessagePattern('findOneNotification')
//   findOne(@Payload() id: number) {
//     return this.notificationService.findOne(id);
//   }

//   @MessagePattern('updateNotification')
//   update(@Payload() updateNotificationDto: UpdateNotificationDto) {
//     return this.notificationService.update(updateNotificationDto.id, updateNotificationDto);
//   }

//   @MessagePattern('removeNotification')
//   remove(@Payload() id: number) {
//     return this.notificationService.remove(id);
//   }
// }
