import { Component } from '@angular/core';
import { HelloService } from './service/hello/hello.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public hello: HelloService) {
    console.log(hello.say('kaka'));
  }
}
