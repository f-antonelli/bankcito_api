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

  @Column({ type: 'int' })
  amount!: number;

  @Column({ type: 'text', width: 22 })
  sender!: string;

  @Column({ type: 'text', width: 22 })
  beneficiary!: number;

  @Column({ type: 'text' })
  description!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Transfers;
