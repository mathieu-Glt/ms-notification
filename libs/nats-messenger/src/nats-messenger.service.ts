// 

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NatsMessengerService {
  constructor(
    @Inject('NATS_SERVICE')
    private readonly nats: ClientProxy,
  ) {}
  // import nats service

  // send : envoi avec une réponse en retour
  async send(cmd: string, payload: any): Promise<any> {
    try {
      console.log('send', cmd, payload);
      return await firstValueFrom(this.nats.send(cmd, payload));
    } catch (error) {
      console.log('error', error);
    }
  }

  // emit : envoi sans réponse en retour
  async emit(cmd: string, payload: any): Promise<void> {
    try {
      this.nats.send(cmd, payload);
    } catch (error) {
      console.log('error', error);
    }
    }

}