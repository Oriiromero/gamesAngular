import { Component } from '@angular/core';
import { ITreasure } from 'src/app/shared/interfaces/treasure.interface';


@Component({
  selector: 'app-find-treasure',
  templateUrl: './find-treasure.component.html',
  styleUrls: ['./find-treasure.component.scss']
})

export class FindTreasureComponent {

  rows!: number;
  cols!: number;
  arrayNums!: any[];
  stopedGame: boolean = false;
  buttonText: string = "Create";
  count : number = 0;

  card: ITreasure = {
    image: "/assets/x.png",
    showBack: true,
    isSelected: false,
    foundTreasure: false,
    isTreasure: false
  }

  createGrid() {
    
    this.arrayNums = Array.from({ length: this.rows }, () => Array.from({ length: this.cols }));
    let randomRow = Math.floor(Math.random() * this.rows);
    let randomColumn = Math.floor(Math.random() * this.cols);

    for(let i = 0; i < this.rows; i++)
      {
        for(let j = 0; j < this.cols; j++)
        {
          this.arrayNums[i][j] = new Card;

          if(i == randomRow && j == randomColumn)
          {
            this.arrayNums[i][j].isSelected = false;
            this.arrayNums[i][j].isTreasure = true;

          }
        }
      }

    console.log(randomRow, randomColumn);
    this.buttonText = "Restart";
    this.stopedGame = false;
    this.count = 0;
    return this.arrayNums;
  }


  showImage(card: Card){

    if(this.stopedGame === true) {
      return;
    }

    for(let i = 0; i < this.rows; i++)
      {
        for(let j = 0; j < this.cols; j++)
        {
          if(this.arrayNums[i][j] === card)
          {
            if(this.arrayNums[i][j].isTreasure == true)
            {
              this.arrayNums[i][j].showBack = false;
              this.arrayNums[i][j].isSelected = false;
              this.arrayNums[i][j].foundTreasure= true;

              setTimeout(()=> {
                alert(`You win! It only took you ${this.count} attempts`)
              }, 250)
              
              this.stopedGame = true;
            }
            else {
              if(this.arrayNums[i][j].isSelected == false )
              {
                this.count++; //Cuando el tesoro no es, se suma 1 al contador
              }
              this.arrayNums[i][j].showBack = false;
              this.arrayNums[i][j].isSelected = true;
            }
          }
        }
      }
 
    console.log(this.arrayNums);
  }

}

export class Card implements ITreasure {

  public image = "/assets/x.png";
  public showBack= true;
  public isSelected= false;
  public foundTreasure= false;
  public isTreasure= false;

  constructor(){}
  
};
