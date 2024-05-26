import { Module } from '@nestjs/common';
import { PaymentTypeService } from './payment-type.service';
import { PaymentTypeController } from './payment-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTypeEntity } from './entities/payment-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTypeEntity])],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService],
  exports: [PaymentTypeService],
})
export class PaymentTypeModule {}
