import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    day: string;

    @Column()
    reminder: boolean;
}
