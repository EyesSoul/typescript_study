import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class test {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    str: string;
    @Column()
    date: Date;
}