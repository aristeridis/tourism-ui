import { UserHistory } from '../user-history/user-history.user';

export interface User {
    id: number;
    name: string;
    email: string;
    history: UserHistory[];
    preferences?: string[];
    lastVisited?: Date;
}
