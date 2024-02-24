import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.scss'],
})
export class GrocerylistComponent  implements OnInit {

  newItem: string = '';
  items: string[] = [];
  quantity: string = '';
  quantities: string[] = [];
  newListCreated: boolean = false;

  @Output() listCreated = new EventEmitter<string[]>();

  addItemToList() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';

      this.quantities.push(this.quantity);
      this.quantity = '';
    }
  }

  createList() {
      this.listCreated.emit(this.items);
      this.items = [];
      this.newListCreated = true;

  }

  constructor() { }

  ngOnInit() {}

}
