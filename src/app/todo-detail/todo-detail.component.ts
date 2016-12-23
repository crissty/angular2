import { Component, Input } from '@angular/core';
import { TodoModel } from '../common/todo.model';


@Component({
    selector: 'todo-detail',
    template: ` <div>{{username}}</div>
                <div *ngIf="todo">
                    <h4>Selected todo:</h4>
                    <div class="subject">{{todo.subject}}</div>
                    <div>{{todo.content}}</div>
                </div>`,
    styles:[`
        .subject{
            font-weight: 600;
            font-style: italic;
            margin-bottom: 0.2em;
        }
    `]
})
export class TodoDetailComponent {
    @Input()
    todo: TodoModel;
    @Input()
    username: String;

    constructor() { }

}
