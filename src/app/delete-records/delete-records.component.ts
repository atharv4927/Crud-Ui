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
  res: boolean = false;

  constructor(private crudService: CrudService) {}

  toggleInput(): void {
    this.res = true; // Show the input field and confirm button
  }

  deleteRecord(): void {
    this.crudService.deleteRecord(this.id).subscribe(
      (response) => {
        console.log('Record deleted successfully:', response);
        alert('Record deleted successfully');
        // Handle any additional UI updates if needed
        this.res = false; // Show the input field and confirm button

      },
      (error) => {
        console.error('Error deleting record:', error);
        // Handle error in UI
      }
    );
  }
}
