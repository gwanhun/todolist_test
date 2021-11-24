import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TodoStatus } from "./todo-list-status.enum";

@Entity()
export class Todolist extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar')
    title: string;

    @Column('varchar')
    status: TodoStatus;
}