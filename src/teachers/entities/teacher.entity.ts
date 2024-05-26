import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('teachers')
export class TeacherEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'integer', nullable: true })
  salary: string;

  @Column({ type: 'varchar', nullable: true })
  qualification: string;

  @Column({ type: 'date', nullable: true })
  joiningDate: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToOne(() => UserEntity, (user) => user.teacher)
  @JoinColumn()
  user: UserEntity;

  @Column()
  userId: string;
}
