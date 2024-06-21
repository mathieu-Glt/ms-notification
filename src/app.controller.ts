import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateNotificationDto } from './notification/dto/create-notification.dto';
import { UpdateNotificationDto } from './notification/dto/update-notification.dto';
import brevo from '@getbrevo/brevo';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// Includes Brevo library of sendinblue
const SibApiV3Sdk = require('sib-api-v3-sdk');
import 'dotenv/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// import htmlContent from './template-email/temaple.js';
// import * as htmlContent from '../template-email/temaple.js';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('SEND_EMAIL_FORGOT_PASSWORD')
  async create(@Payload() data: any) {
    console.log('====================================');
    console.log("apikeysendinblue => ", process.env.API_KEY_SENDINBLUE);
    console.log('====================================');



    console.log('SEND_EMAIL_FORGOT_PASSWORD');
    console.log("data - SEND_EMAIL_FORGOT_PASSWORD", data);
    // Initialiaze the client sendinblue
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.API_KEY_SENDINBLUE;

    console.log("apikey", apiKey);
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    
    const sender = {
      email: data.email,
      name: 'Mathieu le BG !'
    };

    const htmlContent = `<html>

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">You updated the password for your Twitch account<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
  </div>

  <body style="background-color:#efeef1;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
    <img style="display: block;margin-left: auto;margin-right: auto;" src="https://us.123rf.com/450wm/wikagraphic/wikagraphic2101/wikagraphic210103223/163076153-lettre-initiale-logo-rk-avec-le-nom-de-la-soci%C3%A9t%C3%A9-feather-conception-simple-et-propre-logo.jpg?ver=6" style="display:block;outline:none;border:none;text-decoration:none" width="114" /><br/>
    <p style="font-size:14px;line-height:1.5;margin:16px 0">Hi ! Dear visitor </p>
    <p>Click on this link to modify your password: <a href="${data.url}">Reset Password</a></p>
    <p style="font-size:14px;line-height:1.5;margin:16px 0">Contact : Mathieu GILLET</p>
    <p style="font-size:14px;line-height:1.5;margin:16px 0">email : ${data.email}</p>
    <p style="font-size:14px;line-height:1.5;margin:16px 0">tél : 07.75.75.37.85</p>

  </body>

</html>`;
    const receivers = [
      {
        email: data.email
      }
    ];
    try {
      const sendEmail = await apiInstance.sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Forgot password',
        textContent: 'test email',
        htmlContent,
        })
        return sendEmail;
    } catch (error) {
      console.log("🚀 ~ file: server.js:66 ~ app.post ~ error:", error)
      return { error: error.message };
    }

    
    
  }

  @MessagePattern('SEND_EMAIL')
  findAll() {

    // return this.notificationService.findAll();
  }

  @MessagePattern('findOneNotification')
  findOne(@Payload() id: number) {
    return this.appService.findOne(id);
  }

  @MessagePattern('updateNotification')
  update(@Payload() updateNotificationDto: UpdateNotificationDto) {
    return this.appService.update(
      updateNotificationDto.id,
      updateNotificationDto,
    );
  }

  @MessagePattern('removeNotification')
  remove(@Payload() id: number) {
    return this.appService.remove(id);
  }
}
