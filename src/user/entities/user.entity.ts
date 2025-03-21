import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  // The id field in your entity is marked with @PrimaryGeneratedColumn(),
  // meaning PostgreSQL (via TypeORM) will automatically generate a unique ID when inserting a new record.
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string; // This will store the hashed password
}
