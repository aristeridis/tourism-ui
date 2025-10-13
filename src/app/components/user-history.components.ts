import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserHistoryService } from '../services/user-history.service';
import { UserHistory } from '../user-history/user-history.user';

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  templateUrl: './user-history.components.html',
  styleUrls: ['./user-history.components.css'] 
})
export class UserHistoryComponent implements OnInit {
  histories: UserHistory[] = [];
  userId: number = 2;

  constructor(private userHistoryService: UserHistoryService) { }

  ngOnInit(): void {
    this.userHistoryService.getUserHistories(this.userId).subscribe({
      next: (data) => this.histories = data,
      error: (err) => console.error('Error fetching user histories', err)
    });
  }
}
