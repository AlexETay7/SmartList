import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  backgroundImage: string = "";

  constructor() { }

  ngOnInit() {
    const imagePaths = [
      '../../assets/cake.jpg',
      '../../assets/food-bowl.jpg',
      '../../assets/pancakes.jpg',
      '../../assets/pineapple.jpg',
      '../../assets/pizza.jpg',
      '../../assets/pretty-food.jpg',
      '../../assets/salad.jpg'
    ];

    // Randomly select an image path
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    this.backgroundImage = imagePaths[randomIndex];
  }

}
