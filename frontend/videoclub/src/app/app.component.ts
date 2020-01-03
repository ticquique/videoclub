import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'videoclub';

  constructor() {
    window.localStorage.setItem('id', '5df9502f9be06d0020ca5b29');
  }
}
