import { Routes } from '@angular/router';
import { UserHistoryComponent } from './components/user-history.components';

export const routes: Routes = [
    { path: '', redirectTo: '/history', pathMatch: 'full' },
    { path: 'history', component: UserHistoryComponent },
];