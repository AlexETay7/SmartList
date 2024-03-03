import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryListService } from '../services/grocery-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.page.html',
  styleUrls: ['./grocerylist.page.scss'],
})
export class GrocerylistPage implements OnInit {

  listName: string = "";
  items: string = "";

  constructor(
    public alertController: AlertController,
    private groceryListService: GroceryListService,
    private router: Router
  ) {}

  saveList() {
    if (!this.listName || !this.items) {
      this.presentAlert('Hey!', 'Please fill out all fields');
      return;
    }

    const itemList = this.items.split(',').map(item => item.trim());

    // Save the list using the service
    this.groceryListService.saveList(this.listName, itemList);

    this.presentAlert('Success', 'Grocery list saved successfully');
    this.listName = '';
    this.items = '';

    this.redirectToHomePage();
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  redirectToHomePage() {
    this.router.navigate(['/home']);
  }

  

  ngOnInit() {
  }

}
