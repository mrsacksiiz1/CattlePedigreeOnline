import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: Number;
  code: Number;
  name: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, code: 0.001, name: 'Hydrogen', symbol: 'H'},
  {position: 2, code: 0.002, name: 'Helium',  symbol: 'He'},
  {position: 3, code: 0.003, name: 'Lithium',  symbol: 'Li'},
  {position: 4, code: 0.004, name: 'Beryllium',  symbol: 'Be'},
  {position: 5, code: 0.005, name: 'Boron',  symbol: 'B'},
  {position: 6, code: 0.006, name: 'Carbon', symbol: 'C'},
  {position: 7, code: 0.007, name: 'Nitrogen',  symbol: 'N'},
  {position: 8, code: 0.008, name: 'Oxygen',  symbol: 'O'},
  {position: 9, code: 0.009, name: 'Fluorine',  symbol: 'F'},
  {position: 10, code: 0.010, name: 'Neon',  symbol: 'Ne'},
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  displayedColumns: string[] = ['position', 'code', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
