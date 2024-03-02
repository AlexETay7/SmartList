import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  redirectMyToDoPage() {
    this.router.navigate(['/mytodos']);
  }

  redirectToMyGroceriesPage() {
    this.router.navigate(['/mygrocerylists']);
  }

  redirectToMyRecipesPage() {
    this.router.navigate(['/myrecipes']);
  }

  redirectToHomePage() {
    this.router.navigate(['/home']);
  }

}
