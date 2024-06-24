import { RouterModule, Routes } from '@angular/router';
import { SaveRecordComponent } from './save-record/save-record.component';
import { GetRecordsComponent } from './get-records/get-records.component';
import { DeleteRecordsComponent } from './delete-records/delete-records.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamodbOperationsComponent } from './dynamodb-operations/dynamodb-operations.component';
import { S3OperationsComponent } from './s3-operations/s3-operations.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route redirects to Save Record
  { path: 'save', component: SaveRecordComponent },
  { path: 'get', component: GetRecordsComponent },
  { path: 'delete', component: DeleteRecordsComponent },
  { path: 'update', component: UpdateRecordsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'records', component:DynamodbOperationsComponent},
  { path: 'image', component:S3OperationsComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
