import { RouterModule, Routes } from '@angular/router';
import { SaveRecordComponent } from './save-record/save-record.component';
import { GetRecordsComponent } from './get-records/get-records.component';
import { DeleteRecordsComponent } from './delete-records/delete-records.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/save', pathMatch: 'full' }, // Default route redirects to Save Record
  { path: 'save', component: SaveRecordComponent },
  { path: 'get', component: GetRecordsComponent },
  { path: 'delete', component: DeleteRecordsComponent },
  { path: 'update', component: UpdateRecordsComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
