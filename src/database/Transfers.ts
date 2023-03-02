import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Transfers extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  transfer_id!: string;

  @Column({ type: 'number' })
  amount!: number;

  @Column({ type: 'text', length: 22 })
  sender!: string;

  @Column({ type: 'text', length: 22 })
  beneficiary!: number;

  @Column({ type: 'text' })
  description!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Transfers;
