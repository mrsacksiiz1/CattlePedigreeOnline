import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dialogdatadelete',
  templateUrl: './dialogdatadelete.component.html',
  styleUrls: ['./dialogdatadelete.component.scss']
})
export class DialogdatadeleteComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogdatadeleteComponent>) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
}
