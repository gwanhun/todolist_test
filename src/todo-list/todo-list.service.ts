import { Injectable, NotFoundException } from '@nestjs/common';
import {TodoStatus } from './todo-list-status.enum';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoRepository } from './todo-list.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Todolist } from './todo-list.entity';

@Injectable()
export class TodoListService {
    constructor(
        @InjectRepository(TodoRepository)
        private todoRepository: TodoRepository
    ){}

    //전체 할 일 목록 가져오기
    async getAllTodo(): Promise<Todolist[]>{
        return this.todoRepository.find();
    }
    
    //할 일 등록
    createTodo(createTodoDto: CreateTodoDto): Promise<Todolist>{
        return this.todoRepository.craeteTodo(createTodoDto);
    }

    //아이디에 해당하는 할 일 가져오기
    async getTodoById(id: number): Promise <Todolist>{
        const found = await this.todoRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Can't find Todo wirh id ${id}`)
        }
        return found;
    }

    //아이디에 해당하는 할 일 삭제
    async deleteTodo(id: number): Promise<void>{
        const result = await this.todoRepository.delete(id);

        if(result.affected === 0){
            throw new NotFoundException(`Can't find Todo with id ${id}`)
        }
    }

    //아이디에 해당하는 할 일 상태 업데이트
    async updateTodoStatus(id: number, status: TodoStatus): Promise<Todolist>{
        const todo = await this.getTodoById(id);

        todo.status = status;
        await this.todoRepository.save(todo);

        return todo;

    }
   
}
