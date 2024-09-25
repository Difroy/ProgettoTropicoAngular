import { Building } from "./Building";

export interface Isle {
    id: number;
    name: string;
    buildings: Building[]; // Lista di edifici sull'isola
}
