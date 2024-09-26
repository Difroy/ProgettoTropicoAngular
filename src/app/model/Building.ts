import { Tropicano } from "./Tropicano";
export interface Building {
    
    id: number;
    name: string;
    address: string;
    buildingType: "Residential" | "Industry"; // You can use string literals for the types
    rent?: number; // Optional for Industry
    capacity?: number; // Optional for Industry
    production?: number; // Optional for Residential
    jobs?: number; // Optional for Residential
    product?: "TOBACCO" | "BANANA" | "ANANAS" | "WHEAT" | "COTTON" | "CARBON" | 
              "MEAT" | "MILK" | "FUR" | "CIGARS" | "STEEL" | "IRON" | 
              "JEWELS" | "RUM"; // Only relevant for Industry
    residents?: Tropicano[]; // Could be replaced with a more specific type, e.g., TropicanoDTO[]
    workers?: Tropicano[]; // Could be replaced with a more specific type, e.g., TropicanoDTO[]
}

export interface BasicBuildingInfo
{
    id:number;
    name:string;
    buildingType:string;

}
