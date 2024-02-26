import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-popup',
  templateUrl: './home-popup.component.html',
  styleUrls: ['./home-popup.component.scss'],
})
export class HomePopupComponent  implements OnInit {

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
