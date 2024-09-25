export interface Tropicano {
    id: number;
    name: string;
    surname: string;
    birthyear: number;
    gender: "M" | "F";
    education: "NONE" | "HS" | "COLLEGE";
    party: "LEFT" | "RIGHT";
    satisfaction: number;
}
