import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity( )
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column("real")
    preco!: number;
}