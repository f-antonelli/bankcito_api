import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from './User';

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  account_id!: string;

  @Column({ type: 'number', length: 12 })
  acc_number!: number;

  @Column({ type: 'number' })
  balance!: number;

  @Column({ type: 'number', length: 22 })
  cbu!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user!: User;
}

export default Account;
