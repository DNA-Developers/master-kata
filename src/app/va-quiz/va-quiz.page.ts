import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-va-quiz',
  templateUrl: './va-quiz.page.html',
  styleUrls: ['./va-quiz.page.scss'],
})
export class VaQuizPage implements OnInit {

  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  value = 0;
  results = {
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectKatakana: [],
    count: 0
  };
  show = String(this.value);
  constructor(private getData: DataService, private router: Router ) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(104, 108);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }

  choose(choice, answer, katakana) {
    this.counter++;
    if (this.counter >= this.a.length) {
      this.results['count']++;
      if(choice === answer) {
        this.results['correct']++;
      } else {
        this.results['incorrect']++;
        this.results['incorrectRo'].push(answer);
        this.results['incorrectKatakana'].push(katakana);
      }
      this.value = 1;
      this.show = String(this.value);
      if(this.counter >= 4) {
        setTimeout(() => {
          this.getData.getAdvancedResults().pop();
          this.getData.getAdvancedResults().push(this.results);
          this.router.navigate(['/home/tabs/advanced/result']);
        }, 150);
      }


    } else {
      this.list = [this.a[this.counter]];
      this.value = this.value + 0.2;
      this.show = String(this.value);
      if(choice === answer) {
        this.results['correct']++;
      } else {
        this.results['incorrect']++;
        this.results['incorrectRo'].push(answer);
        this.results['incorrectKatakana'].push(katakana);
      }
      this.results['count']++;
    }
  }
}

