import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'https://ngw09t9qh5.execute-api.ap-south-1.amazonaws.com/dev/backendcrud';

  constructor(private http: HttpClient) { }

  saveRecord(recordDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveRecord`, recordDetails);
  }

  getRecords(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getRecords`);
  }

  updateRecord(id: string, attribute: string, value: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/updateRecords`, { id, attribute, value });
  }

  deleteRecord(id: string,name:string): Observable<any> {
    return this.http.request('delete', `${this.apiUrl}/deleteRecords`, { body: { id,name } });
  }
}
