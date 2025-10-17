export interface Landmark {
    id: number;
    name: string;
    description: string;
    location: string;
    category: string;
    rating: number;
    userId?: number; // Προαιρετικό πεδίο αν έχεις σύνδεση με συγκεκριμένο χρήστη
}
