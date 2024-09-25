export interface Building {
    id: number;
    name: string;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    area: number;
    isleId: number;
    isleName: string;
    buildingType: string; // "Residential" o "Industry"

    // Campi specifici per Residential
    capacity?: number;
    rent?: number;

    // Campi specifici per Industry
    product?: string;
    quantity?: number;
    jobs?: number;
}
