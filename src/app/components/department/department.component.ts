import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DepartmentService } from '../../services/department.service';
import { Console } from '@angular/core/src/console';
import Department from './department';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { EditPopupComponent } from '../../widgets/edit-popup/edit-popup.component';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  rows: Department[];
  loadingIndicator: boolean = true;
  departmentData: Department[] | null;
  statusCode: number;
  ngOnInit() {
    this.depService.getDepartments().subscribe(data => { this.loadingIndicator = false; return this.rows = data }, errorCode => this.statusCode = errorCode);
  }
  constructor(private depService: DepartmentService,public dialog: MatDialog) {

  }
  openEditDialog(obj:Department){
    
    let dialogRef =  this.dialog.open(EditPopupComponent, {
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
        if(result !== undefined){
          this.editDepartemet(result);
        }
    });
  }
  editDepartemet(data) {
    this.depService.updateDepartment(data);
  }
  deleteDepartemet(id) {
    this.depService.deleteDepartment(id);
  }
}

