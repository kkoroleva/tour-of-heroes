import { Component } from '@angular/core';
import { HelloDirective } from './directives/hello.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';


}
