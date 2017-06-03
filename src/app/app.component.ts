import {Component} from '@angular/core';
import {Todo} from "./models/Todo";


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css').toString()]
})
export class AppComponent {
    lists: String[] = [
        'Lista 1', 'Lista 2'
    ];

    i: number = 1;
    model: String = '';

    todoList: Todo[] = [];

    public addItem() {
        this.lists.push('Lista ' + (this.lists.length + 1));
    }

    public addTodo() {
        console.log('Add todo');

        console.log(this.model);
        let todo = new Todo();
        todo.id = this.i++;
        todo.description = this.model;
        todo.check = false;
        this.todoList.push(todo);
        this.model = '';
        console.log(this.todoList);

    }

    public changeStatus(todo: Todo){
        todo.check = !todo.check;
    }
}
