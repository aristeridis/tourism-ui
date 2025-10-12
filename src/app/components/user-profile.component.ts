import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './user.component.html',
    styleUrls: ['./user-history.components.css']
})
export class UserComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(
            data => this.users = data,
            err => console.error('Error fetching users', err)
        );
    }
}
