import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TodoListController } from './todo-list.controller';
import { TodoRepository } from './todo-list.repository';
import { TodoListService } from './todo-list.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoRepository]),
    AuthModule
  ],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoListModule {}
