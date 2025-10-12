import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Last visited: {{ user.lastVisited | date }}</p>
      <h3>History:</h3>
      <ul>
        <li *ngFor="let h of user.history">
          Landmark: {{ h.landmarkId }}, Visit: {{ h.visitDate }}, Rating: {{ h.rating }}★
        </li>
      </ul>
    </div>
  `
})
export class UserProfileComponent implements OnInit {
    user: User | undefined;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUser(1).subscribe(data => this.user = data);
    }
}
