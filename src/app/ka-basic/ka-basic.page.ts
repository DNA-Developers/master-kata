import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ka-basic',
  templateUrl: './ka-basic.page.html',
  styleUrls: ['./ka-basic.page.scss'],
})
export class KaBasicPage implements OnInit {

  constructor(private getData: DataService) { }
  front = false;
  snd;
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(5, 10);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }
  flip() {
    this.front = !this.front;
  }
  playSound(){
    this.front = null;
    this.snd = new Audio(`../../assets/${this.list[0]['romanji']}(hiragana).mp3`);
    this.snd.play();
  }
  next() {
    this.counter++;
    this.list = [this.a[this.counter]];
}
back() {
    this.counter--;
    this.list = [this.a[this.counter]];
}


}
