import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserHistory } from '../user-history/user-history.user';

@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {
  private apiUrl = 'http://localhost:8080/api/history';

  constructor(private http: HttpClient) { }

  getUserHistories(): Observable<UserHistory[]> {
    return this.http.get<UserHistory[]>(this.apiUrl);
  }
}
