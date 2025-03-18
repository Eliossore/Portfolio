import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJsonData(filePath: string): Observable<any> {
    return this.http.get(filePath);
  }

  getCompetences(): Observable<any> {
    return this.getJsonData('competence.json');
  }
}
