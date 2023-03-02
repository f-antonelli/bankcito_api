import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// eslint-disable-next-line import/no-cycle
import Account from './Account';
import Transfers from './Transfers';

// eslint-disable-next-line no-shadow
enum MovType {
  INGRESS = 'ingress',
  EGRESS = 'egress',
}

@Entity()
class Movements extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  operation_id!: string;

  @Column({ type: 'number' })
  amount!: number;

  @Column({ type: 'text', length: 22 })
  sender!: string;

  @Column({
    type: 'enum',
    enum: MovType,
  })
  type!: MovType;

  @Column({ type: 'text' })
  description!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id' })
  account!: Account;

  @OneToOne(() => Transfers)
  @JoinColumn({ name: 'transfer_id', referencedColumnName: 'transfer_id' })
  transfer!: Transfers;
}

export default Movements;
