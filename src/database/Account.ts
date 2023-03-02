import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// eslint-disable-next-line import/no-cycle
import Card from './Card';
import User from './User';

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  account_id!: string;

  @Column({ type: 'number', length: 12 })
  acc_number!: number;

  @Column({ type: 'number' })
  balance!: number;

  @Column({ type: 'text', length: 22 })
  cbu!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user!: User;

  @OneToMany(() => Card, (card) => card.account)
  cards!: Card[];
}

export default Account;
