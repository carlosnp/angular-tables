import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-data-tables-net',
  templateUrl: './data-tables-net.component.html',
  styleUrls: ['./data-tables-net.component.scss']
})
export class DataTablesNetComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
