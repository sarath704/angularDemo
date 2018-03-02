import { Component, OnInit, Inject,NgModule } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material';
import Department from '../../components/department/department';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Department,public dialogRef: MatDialogRef<EditPopupComponent>) {}

  ngOnInit() {
    console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  updatDialog(){
    this.dialogRef.close(this.data);
  }
}
