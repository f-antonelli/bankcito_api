import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

// eslint-disable-next-line no-shadow
enum UserRole {
  ADMIN = 'admin',
  GOD = 'god',
  USER = 'user',
}

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id!: number;

  @Column({ type: 'text', width: 15 })
  username!: string;

  @Column({ type: 'text', select: false })
  password!: string;

  @Column({ unique: true, type: 'text' })
  email!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role!: UserRole;

  @Column({ default: true, type: 'boolean' })
  active!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}

export default User;
