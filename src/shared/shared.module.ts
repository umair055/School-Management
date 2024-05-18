import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { SharedService } from './shared.service';

@Module({
  providers: [EmailService, SharedService],
  exports: [EmailService, SharedService],
})
export class SharedModule {}
