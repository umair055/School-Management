import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Generated('increment')
  rollNo: number;

  @Column({ type: 'integer' })
  class: number;

  @Column({ type: 'integer' })
  monthlyFee: number;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToOne(() => UserEntity, (user) => user.student)
  @JoinColumn()
  user: UserEntity;

  @Column()
  userId: string;
}
