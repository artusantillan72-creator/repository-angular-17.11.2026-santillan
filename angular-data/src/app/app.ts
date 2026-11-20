import { Component, signal } from '@angular/core';
import { UserList} from './user-list/user-list';
import { HelloWorld} from './hello-world/hello-world';

@Component({
  imports: [UserList, HelloWorld],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-data');
}
