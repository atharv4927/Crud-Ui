import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-get-records',
  standalone: true,
  imports: [[CommonModule,HttpClientModule]],
  templateUrl: './get-records.component.html',
  styleUrl: './get-records.component.scss',
  providers: [
    CrudService,
  ]
})
export class GetRecordsComponent {
  res: boolean = false;
  data: any;

  constructor(private crudService: CrudService) {}
  OnInit(){
    this.getRecords();
  }
  getRecords(): void {
    this.crudService.getRecords().subscribe(
      (response) => {
        this.data = response;
        this.res = true;
      },
      (error) => {
        console.error('Error fetching records:', error);
        // Handle error in UI
      }
    );
  }
}
