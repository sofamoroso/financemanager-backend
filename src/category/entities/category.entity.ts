import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Entry } from 'src/entries/entities/entry.entity';
@Entity()
export class Category {
  // The id field in your entity is marked with @PrimaryGeneratedColumn(),
  // meaning PostgreSQL (via TypeORM) will automatically generate a unique ID when inserting a new record.
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Entry, (entry) => entry.category)
  entries: Entry[];
}
