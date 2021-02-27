import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bug {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    creationDate: number;
}
