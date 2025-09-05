import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XxxHeader } from './shared/xxx-header/xxx-header';
import { XxxLoading } from './core/xxx-loading/xxx-loading';

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
