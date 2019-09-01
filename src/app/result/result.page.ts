import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  results;
  constructor(private getResults: DataService, private router: Router) { }

  ngOnInit() {
    this.results = this.getResults.getResults();
    if(this.results[0]['count'] === 0) {
      this.router.navigate(['home/tabs/basic']);
    }
  }
}
