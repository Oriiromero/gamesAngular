import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/box.interface';


@Component({
  selector: 'app-whack-a-mole',
  templateUrl: './whack-a-mole.component.html',
  styleUrls: ['./whack-a-mole.component.scss']
})
export class WhackAMoleComponent {

  constructor () {  }

  lastTargetCard?: ICard;

  cards: ICard[] = [];

  gameTime: number = 30;
  timerInterval: any;

  points: number = 0;

  ngOnInit() {
    this.cards = [
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
      {
    
        image: "/assets/mole.png",
        isTarget: false
    
      },
    ];

    let myInterval = setInterval(() => this.changeTarget(), 800);

    // setTimeout(() => clearInterval(myInterval), 30000);

    this.timerInterval = setInterval(()=> {
      this.gameTime --;

      if(this.gameTime == 0)
      {
        clearInterval(myInterval);
        clearInterval(this.timerInterval);

        for(let i = 0; i < this.cards.length; i++)
        {
          if(this.cards[i].isTarget)
          {
            this.cards[i].isTarget = false;
            alert(`Your final score is ${this.points}!`)
          } 
        }
      }

      
    }, 1000);
    
  }
  

  changeTarget() 
  {

    for(let i = 0; i < this.cards.length; i++)
    {
      if(this.cards[i].isTarget)
      {
        this.cards[i].isTarget = false;
      } 
    }

    let arrIndex = Math.floor(Math.random() * this.cards.length);
    console.log(arrIndex);

    if(this.cards[arrIndex] == this.lastTargetCard)
    {
      this.lastTargetCard.isTarget = false;
      this.changeTarget();
      return;
    }

    this.cards[arrIndex].isTarget = true;

    this.lastTargetCard = this.cards[arrIndex];

  }

  sumPoint() {
    this.points++;
  }

}
