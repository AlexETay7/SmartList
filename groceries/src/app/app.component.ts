import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}

  onListCreated(items: string[]) {
    console.log('New grocery list created:', items);
    // Here you can handle the created list, such as storing it, displaying it, etc.
  }
}
