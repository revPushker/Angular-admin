import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cardslist',
  templateUrl: './cardslist.component.html',
  styleUrls: ['./cardslist.component.css']
})
export class CardslistComponent implements OnInit {

  public data: any;
  public rowsOnPage: Number = 10;
  public filterQuery: String = '';
  public sortBy: String = '';
  public sortOrder: String = 'desc';
  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/crm-contact.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }

}
