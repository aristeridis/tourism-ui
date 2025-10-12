import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    loading = false;
    error: string | null = null;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.load();
    }

    load(): void {
        this.loading = true;
        this.error = null;
        this.userService.getAll().subscribe({
            next: data => { this.users = data; this.loading = false; },
            error: err => { this.error = 'Failed to load users'; console.error(err); this.loading = false; }
        });
    }
}
