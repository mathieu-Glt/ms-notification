import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NatsMessengerModule } from '@app/nats-messenger';
import { AppController } from './app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRoot(process.env.URI_BDD, { dbName: 'cpa42' }),
    NatsMessengerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
