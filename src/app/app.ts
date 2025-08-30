import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XxxHeader } from './xxx-header/xxx-header';
import { XxxLoading } from './xxx-common/xxx-loading/xxx-loading';

@Component({
  selector: 'xxx=app-root',
  imports: [
    RouterOutlet,
    XxxHeader,
    XxxLoading
  ],
  templateUrl: './app.html'
})
export class App {
}
