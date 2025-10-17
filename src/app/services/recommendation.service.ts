import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landmark } from '../user-model/landmark.model';

@Injectable({
    providedIn: 'root'
})
export class RecommendationService {
    private apiUrl = 'http://localhost:8080/api/recommendations';

    constructor(private http: HttpClient) { }

    getRecommendations(userId: number): Observable<Landmark[]> {
        return this.http.get<Landmark[]>(`${this.apiUrl}/user/${userId}`);
    }
}
