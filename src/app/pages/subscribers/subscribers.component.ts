import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  rows = [];
  selected = [];
  columns: any[] = [
    { prop: 'name'} ,
    { name: 'Company' },
    { name: 'Gender' }
  ];
  constructor() {
    this.fetch((data) => {
      this.rows = data;
      console.log(this.rows);
    });
  }
  ngOnInit() {
  }
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {}

}
