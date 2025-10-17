import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from './components/user-history.components';
import { UserComponent } from './components/user-profile.component';
import { RecommendationsComponent } from "./components/recommendations.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, UserHistoryComponent, UserComponent, RecommendationsComponent],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class AppComponent { }
