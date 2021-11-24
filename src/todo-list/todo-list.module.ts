import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListController } from './todo-list.controller';
import { TodoRepository } from './todo-list.repository';
import { TodoListService } from './todo-list.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoRepository])
  ],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoListModule {}
