import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogdataComponent } from './dialogdata(status)/dialogdata.component';
import { DialogdatadeleteComponent } from './dialogdata(delete)/dialogdatadelete.component';
export interface PeriodicElement {
  position: Number;
  code: string;
  name: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, code: 'MT01', name: 'คำปัน', date: '22/01/61'},
  {position: 2, code: 'MT02', name: 'ตูดเทา',  date: '30/01/61'},
  {position: 3, code: 'MT03', name: 'หน้าหมา',  date: '05/02/61'},
  {position: 4, code: 'MT04', name: 'จู๋หด',  date: '06/02/61'},
];

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  displayedColumns: string[] = ['position', 'code', 'name', 'date', 'status'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openstatusDialog(){
    let dialogRef = this.dialog.open(DialogdataComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}');
    })
  }
  opendeleteDialog(){
    let dialogRef = this.dialog.open(DialogdatadeleteComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}');
    })
  }
}
