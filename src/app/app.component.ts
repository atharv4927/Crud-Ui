import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SaveRecordComponent } from "./save-record/save-record.component";
import { DeleteRecordsComponent } from './delete-records/delete-records.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { GetRecordsComponent } from './get-records/get-records.component';
import { AppRoutingModule } from './app.routes';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SaveRecordComponent , DeleteRecordsComponent , UpdateRecordsComponent, GetRecordsComponent , AppRoutingModule]
})
export class AppComponent {
  title = 'Crud-Ui';
}
