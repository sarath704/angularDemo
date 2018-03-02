import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentService } from './services/department.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from '../message.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditPopupComponent } from './widgets/edit-popup/edit-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon"; 
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EditPopupComponent
  ],
  imports: [
    MatIconModule,BrowserModule, MatInputModule, HttpClientModule, NgxDatatableModule, MatDialogModule, BrowserAnimationsModule, FormsModule, MatFormFieldModule
  ],
  entryComponents: [EditPopupComponent],
  providers: [HttpErrorHandler, MessageService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
