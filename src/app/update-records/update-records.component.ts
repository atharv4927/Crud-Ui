import { FormsModule } from '@angular/forms';
import { CrudService } from './../crud.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-records',
  standalone: true,
  imports: [[FormsModule , HttpClientModule , CommonModule]],
  templateUrl: './update-records.component.html',
  styleUrl: './update-records.component.scss',
  providers: [
    CrudService,
  ]
})
export class UpdateRecordsComponent {
  id: string = '';
  attribute: string = '';
  value: any = '';
  constructor(private crudService:CrudService){}
  onSubmit() {
    this.crudService.updateRecord(this.id, this.attribute, this.value).subscribe(response => {
      console.log('Record updated:', response);
    }, error => {
      console.error('Error updating record:', error);
    });
  }
}
