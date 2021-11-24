import { EntityRepository, Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { TodoStatus } from "./todo-list-status.enum";
import { Todolist } from "./todo-list.entity";

@EntityRepository(Todolist)
export class TodoRepository extends Repository<Todolist>{
    async craeteTodo(createTodoDto: CreateTodoDto) : Promise<Todolist>{
        const {title} = createTodoDto;

        const todo = this.create({
            title,
            status: TodoStatus.INCOMPLETE
        })

        await this.save(todo);
        return todo;
    }
}