import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.scss']
})
export class DialogdataComponent implements OnInit {

  

  constructor(public thisDialogRef: MatDialogRef<DialogdataComponent>) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }


}
