import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentStatusEnum } from '../enums/status.enum';
import { PaymentTypeEntity } from 'src/payment-type/entities/payment-type.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ type: 'enum', enum: PaymentStatusEnum })
  status: PaymentStatusEnum;

  @ManyToOne(() => PaymentTypeEntity, (paymentType) => paymentType.payment)
  paymentType: PaymentTypeEntity;

  @ManyToOne(() => UserEntity, (user) => user.payment)
  user: UserEntity;

  @Column()
  userId: string;

  @Column()
  paymentTypeId: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
