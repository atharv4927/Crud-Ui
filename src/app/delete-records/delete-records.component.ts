import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-records',
  standalone: true,
  imports: [[FormsModule , HttpClientModule , CommonModule]],
  templateUrl: './delete-records.component.html',
  styleUrl: './delete-records.component.scss',
  providers: [
    CrudService,
  ]
})
export class DeleteRecordsComponent {
  id: string = '';
  name: string = '';

  constructor(private crudService: CrudService) {}

  deleteRecord(): void {
    this.crudService.deleteRecord(this.id, this.name).subscribe(
      (response) => {
        console.log('Record deleted successfully:', response);
        alert('Record deleted successfully');
      },
      (error) => {
        console.error('Error deleting record:', error);
      }
    );
  }
}
