import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from '../app/components/user-history.components';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, UserHistoryComponent],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class AppComponent { }
