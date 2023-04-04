import { Component, Input } from '@angular/core';
import { IPlanet } from 'src/app/shared/interfaces/card.interface';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent {
  @Input() cards!: any;

  lastSelectedCard ?: IPlanet; //"?:" si no existe asignarle ese tipo

  amountSelected: number = 0;

  checkCard(card: IPlanet) {

    if(!this.lastSelectedCard){

      card.selected = true;
      this.lastSelectedCard = card;

      this.amountSelected++;
    }
    else{

      if(this.amountSelected >= 2){
        return;
      }

      card.selected = true;
      this.amountSelected++;

      if(this.lastSelectedCard!.name == card.name){
        
        setTimeout(()=> {

        card.completed = true;
        card.selected = false;

        this.lastSelectedCard!.completed = true;
        this.lastSelectedCard!.selected = false;

        this.lastSelectedCard = undefined;
        this.amountSelected = 0;

        }, 1000);

      }
      else{

        setTimeout(()=> {
          
          card.selected = false;
          this.lastSelectedCard!.selected = false;
  
          this.lastSelectedCard = undefined;
          this.amountSelected = 0;
        }, 1500);

      }

    }

    
  }

}
