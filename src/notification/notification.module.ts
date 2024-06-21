import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
// import { NotificationController } from './notification.controller';

@Module({
  controllers: [],
  providers: [NotificationService]
})
export class NotificationModule {}
