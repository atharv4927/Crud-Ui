import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dynamodb-operations',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './dynamodb-operations.component.html',
  styleUrl: './dynamodb-operations.component.scss'
})
export class DynamodbOperationsComponent {

}
