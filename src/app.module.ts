import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { TodoListModule } from './todo-list/todo-list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TodoListModule],

})
export class AppModule {}
