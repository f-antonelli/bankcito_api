import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// eslint-disable-next-line import/no-cycle
import Account from './Account';

@Entity()
class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  card_id!: string;

  @Column({ type: 'int' })
  card_number!: number;

  @Column({ type: 'text', select: false })
  pin!: string;

  @Column({ type: 'boolean', default: false })
  debit!: boolean;

  @Column({ type: 'boolean', default: false })
  credit!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Account, (acc) => acc.cards)
  @JoinColumn({ name: 'account_id' })
  account!: Account;
}

export default Card;
