import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500 })
    name: string;

    @Column()
    parent: number;

    @ManyToOne(() => User, (user) => user.id, {
        onDelete: 'CASCADE',
      })
      user: User;

}
