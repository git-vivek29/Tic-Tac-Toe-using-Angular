import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  winMessage: string = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');
  flag = false;
  
  constructor(private toastr: ToastrService) {}

  handleClick(itemNumber : number) : any{

    if(this.winMessage){
      return this.toastr.info(this.winMessage.toUpperCase());
    }
    if(this.itemArray[itemNumber] === 'empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
    } else{
      return this.toastr.error('Already Filled');
    }
    this.checkIsWinner();
  }

  reloadGame(){
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  }

  checkIsWinner(){

    if(
      this.itemArray[0] == this.itemArray[1] &&
      this.itemArray[0] == this.itemArray[2] &&
      this.itemArray[0] != 'empty'
    ){
      this.winMessage = `${this.itemArray[0]} won`;
      return;
    }else if(
      this.itemArray[3] == this.itemArray[4] &&
      this.itemArray[3] == this.itemArray[5] &&
      this.itemArray[3] != 'empty'
    ){
      this.winMessage = `${this.itemArray[3]} won`;
      return;
    }else if(
      this.itemArray[6] == this.itemArray[7] &&
      this.itemArray[6] == this.itemArray[8] &&
      this.itemArray[6] != 'empty'
    ){
      this.winMessage = `${this.itemArray[6]} won`;
      return;
    }else if(
      this.itemArray[0] == this.itemArray[3] &&
      this.itemArray[0] == this.itemArray[6] &&
      this.itemArray[0] != 'empty'
    ){
      this.winMessage = `${this.itemArray[0]} won`;
      return;
    }else if(
      this.itemArray[1] == this.itemArray[4] &&
      this.itemArray[1] == this.itemArray[7] &&
      this.itemArray[1] != 'empty'
    ){
      this.winMessage = `${this.itemArray[1]} won`;
      return;
    }else if(
      this.itemArray[2] == this.itemArray[5] &&
      this.itemArray[2] == this.itemArray[8] &&
      this.itemArray[2] != 'empty'
    ){
      this.winMessage = `${this.itemArray[2]} won`;
      return;
    }else if(
      this.itemArray[0] == this.itemArray[4] &&
      this.itemArray[0] == this.itemArray[8] &&
      this.itemArray[0] != 'empty'
    ){
      this.winMessage = `${this.itemArray[0]} won`;
      return;
    }else if(
      this.itemArray[2] == this.itemArray[4] &&
      this.itemArray[2] == this.itemArray[6] &&
      this.itemArray[2] != 'empty'
    ){
      this.winMessage = `${this.itemArray[2]} won`;
      return;
    }else if(!this.itemArray.includes('empty')){
      this.winMessage = `Game Tie`;
      this.flag = true;
      return;
    }
  }
}
