import { Component } from '@angular/core';
import {TodoListComponent} from './todos-list/todo-list.component';
import {Logger} from './common/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger]
})
export class AppComponent {
  title = 'app works!';
}
