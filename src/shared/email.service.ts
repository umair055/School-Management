import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
// TODO: This shift to email microservice
export class EmailService {
  constructor(private readonly configService: ConfigService) {}
  transporter = nodemailer.createTransport(this.configService.get('emailConfig'));

  // Function to send an email
  async sendEmail(
    to: string,
    subject: string,
    templateName: string,
    placeholders: { [key: string]: string },
  ): Promise<void> {
    try {
      // get template with placeholders replaced
      const html = ``;
      // Define email options
      const mailOptions = {
        from: this.configService.get('FROM_EMAIL'),
        to,
        subject,
        html,
      };
      // Send the email
      this.transporter.sendMail(mailOptions);
    } catch (error) {
      Logger.error(
        `Error in sending email where: params: ${JSON.stringify({ to, subject, templateName, placeholders })}`,
      );
      throw error;
    }
  }
}
