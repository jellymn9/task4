import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //decorator
export class User{
    @PrimaryGeneratedColumn()//id will be primary key
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;
}