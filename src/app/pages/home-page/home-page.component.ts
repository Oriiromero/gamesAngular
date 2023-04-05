import { Component, Input } from '@angular/core';
import { IPlanet } from '../../shared/interfaces/card.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  planetsNormal: IPlanet[] = [
    {
      id: 1,
      name: 'earth',
      img: 'assets/earth.svg',
      selected: false,
      completed: false
    },
    {
      id: 2,
      name: 'jupiter',
      img: 'assets/jupiter.svg',
      selected: false,
      completed: false
    },
    {
      id: 3,
      name: 'mars',
      img: 'assets/mars.svg',
      selected: false,
      completed: false
    },
    {
      id: 7,
      name: 'earth',
      img: 'assets/earth.svg',
      selected: false,
      completed: false
    },
    {
      id: 8,
      name: 'jupiter',
      img: 'assets/jupiter.svg',
      selected: false,
      completed: false
    },
    {
      id: 9,
      name: 'mars',
      img: 'assets/mars.svg',
      selected: false,
      completed: false
    },
  ]
    
}


