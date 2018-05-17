import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: string[];

  constructor() {
    this.items = ['test', 'execute', 'refactor'];
  }

  add(item: string): void {
    this.items.push(item);
  }

}
