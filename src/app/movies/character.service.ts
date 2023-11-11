import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacterDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
