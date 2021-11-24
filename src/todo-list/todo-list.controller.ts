import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatusValidationPipe } from './pipes/todo-list-status-validation.pipe';
import { TodoStatus } from './todo-list-status.enum';
import { Todolist } from './todo-list.entity';
import { TodoListService } from './todo-list.service';

@Controller('todo-list')
export class TodoListController {
    constructor(private todoListService: TodoListService){}

    //전체 할 일 목록 가져오기
    @Get()
    getAllTodo(): Promise<Todolist[]>{
        return this.todoListService.getAllTodo();
    }

    //할 일 등록
    @Post()
    @UsePipes(ValidationPipe)//유효성 체크
    createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todolist>{
        return this.todoListService.createTodo(createTodoDto)
    }

   //아이디에 해당하는 할 일 가져오기
    @Get('/:id')
    getTodoById(@Param('id') id:number) : Promise<Todolist> {
        return this.todoListService.getTodoById(id);
    }

    //아이디에 해당하는 할 일 삭제
    @Delete('/:id')
    deleteTodo(@Param('id', ParseIntPipe) id): Promise<void>{
        return this.todoListService.deleteTodo(id);
    }

   //아이디에 해당하는 할 일 상태 업데이트
    @Patch('/:id/status')
    updateTodoStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TodoStatusValidationPipe) status: TodoStatus
    ){
        return this.todoListService.updateTodoStatus(id,status);
    }

}
