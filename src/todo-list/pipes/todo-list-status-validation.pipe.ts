import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TodoStatus } from "../todo-list-status.enum";

export class TodoStatusValidationPipe implements PipeTransform{
   readonly StatusOptions = [
       TodoStatus.COMPLETE,
       TodoStatus.INCOMPLETE
   ]

    transform(value: any){
       value = value.toUpperCase();

       if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`)
       }

        return value;
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1
    }
}