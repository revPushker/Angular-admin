import { Component, OnInit } from '@angular/core';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
