// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { NatsMessengerService } from './nats-messenger.service';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       // cache: true, // Assurez-vous que cette option est correctement configurée selon vos besoins.
//     }),
//     ClientsModule.register([
//       {
//         name: 'NATS_SERVICE',
//         transport: Transport.NATS,
//         options: {
//           servers: [`nats://${process.env.NATS_DNS}:${process.env.NATS_PORT}`],
//         },
//       },
//     ]),
//   ],
//   providers: [NatsMessengerService],
//   exports: [NatsMessengerService],
// })
// export class NatsMessengerModule {}

import { Module } from '@nestjs/common';
import { NatsMessengerService } from './nats-messenger.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE', 
        transport: Transport.NATS,
        options: {
          servers: [`nats://${process.env.NATS_DNS}:${process.env.NATS_PORT}`]
        }
      }
    ])
  ],
  providers: [NatsMessengerService],
  exports: [NatsMessengerService],
})
export class NatsMessengerModule {}
