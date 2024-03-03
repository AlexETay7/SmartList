import { Component, OnInit } from '@angular/core';
import { GroceryListService } from '../services/grocery-list.service';

@Component({
  selector: 'app-mygrocerylists',
  templateUrl: './mygrocerylists.page.html',
  styleUrls: ['./mygrocerylists.page.scss'],
})
export class MygrocerylistsPage implements OnInit {

  groceryLists: { name: string; items: string[]; }[] = [];

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
    this.groceryLists = this.groceryListService.getLists();
  }

}
