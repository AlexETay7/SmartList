import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  private groceryLists: { name: string, items: string[] }[] = [];

  constructor() { }

  saveList(name: string, items: string[]) {
    this.groceryLists.push({ name, items });
  }

  getLists() {
    return this.groceryLists;
  }
}
