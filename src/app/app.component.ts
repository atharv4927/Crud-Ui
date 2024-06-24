import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SaveRecordComponent } from "./save-record/save-record.component";
import { DeleteRecordsComponent } from './delete-records/delete-records.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { GetRecordsComponent } from './get-records/get-records.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamodbOperationsComponent } from './dynamodb-operations/dynamodb-operations.component';
import { S3OperationsComponent } from './s3-operations/s3-operations.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SaveRecordComponent , DeleteRecordsComponent , UpdateRecordsComponent, GetRecordsComponent , AppRoutingModule, DashboardComponent,DynamodbOperationsComponent,S3OperationsComponent, AppComponent],

})
export class AppComponent {
  title = 'Crud-Ui';

}
