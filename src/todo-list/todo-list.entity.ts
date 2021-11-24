import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TodoStatus } from "./todo-list-status.enum";

@Entity()
export class Todolist extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    status: TodoStatus;
}