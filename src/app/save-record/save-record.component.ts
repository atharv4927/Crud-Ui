import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-save-record',
  standalone: true,
  imports: [[FormsModule , HttpClientModule]],
  templateUrl: './save-record.component.html',
  styleUrl: './save-record.component.scss',
  providers: [
    CrudService,
  ]
})
export class SaveRecordComponent {
  id: string = "";
  name: string = "";
  task: string = "";

  constructor(private crudService: CrudService) {}

  saveRecord(): void {
    const recordDetails = { id: this.id, name: this.name, task: this.task };
    this.crudService.saveRecord(recordDetails).subscribe(
      (response) => {
        console.log('Record saved successfully:', response);
        alert('Record saved successfully');
        // Handle response or UI update as needed
      },
      (error) => {
        console.error('Error saving record:', error);
        // Handle error in UI
      }
    );
  }
}
