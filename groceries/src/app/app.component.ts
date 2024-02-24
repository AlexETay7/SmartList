import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public groceryLists = [
    { 
      title: 'Grocery List 1', 
      items: [
        { name: 'Item 1', selectedQuantity: 1 },
        { name: 'Item 2', selectedQuantity: 1 },
        { name: 'Item 3', selectedQuantity: 1 }
      ]
    },
    { 
      title: 'Grocery List 2', 
      items: [
        { name: 'Item 4', selectedQuantity: 1 },
        { name: 'Item 5', selectedQuantity: 1 },
        { name: 'Item 6', selectedQuantity: 1 }
      ]
    }
    // Add more grocery lists as needed
  ];

  public quantities = [1, 2, 3, 4, 5]; // Define available quantity options

  constructor() {}
}
