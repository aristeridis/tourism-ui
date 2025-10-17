import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationService } from '../services/recommendation.service';
import { Landmark } from '../user-model/landmark.model';

@Component({
    selector: 'app-recommendations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './recommendations.component.html',
    styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
    recommendations: Landmark[] = []; // ✅ αρχικοποίηση για να μην είναι undefined
    userId: number = 2; // προσωρινό σταθερό id χρήστη

    constructor(private recommendationService: RecommendationService) { }

    ngOnInit(): void {
        this.recommendationService.getRecommendations(this.userId).subscribe({
            next: (data) => {
                console.log('Data received:', data);
                this.recommendations = data;
            },
            error: (err) => console.error('Error fetching recommendations', err)
        });
    }
}
