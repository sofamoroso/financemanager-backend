import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Category {
  // The id field in your entity is marked with @PrimaryGeneratedColumn(),
  // meaning PostgreSQL (via TypeORM) will automatically generate a unique ID when inserting a new record.
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
