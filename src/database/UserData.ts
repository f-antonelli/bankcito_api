import { Entity, Column } from 'typeorm';

import User from './User';

@Entity()
class UserData extends User {
  @Column({ type: 'text' })
  first_name!: string;

  @Column({ type: 'text' })
  last_name!: string;

  @Column({ type: 'int' })
  phone!: number;
}

export default UserData;
