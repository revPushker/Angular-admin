import { Component, OnInit, NgModule } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public data: any;
  public rowsOnPage: Number = 10;
  public filterQuery: String = '';
  public sortBy: String = '';
  public sortOrder: String = 'desc';
  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/data.json`)
      .subscribe((data) => {
        this.data = data.json();
        console.log(this.data);
      });
  }

}
