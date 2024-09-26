export interface Tropicano {
  
    id: number;
    name: string;
    surname: string;
    birthyear: number;
    religion: 'NONE' | 'CTHULLHU' | 'TROPICANESIMO' | 'METALLARISMO';
    gender: 'M' | 'F';
    education: 'NONE' | 'HS' | 'COLLEGE';
    party: 'LEFT' | 'RIGHT';
    satisfaction: number;
    image:string;
    residentialName?:string,
    industryName?:string,
    industryId?:number,
    residentialId?:number


}
