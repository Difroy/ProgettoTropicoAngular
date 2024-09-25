import { Routes } from '@angular/router';
import { TropicanoHomeComponent } from './tropicano-home/tropicano-home.component';
import { BuildingHomeComponent } from './building-home/building-home.component';

export const routes: Routes = 
[
    { path: '', component: TropicanoHomeComponent }, 
    { path: 'tropicanos', component: TropicanoHomeComponent },
    { path: 'buildings', component: BuildingHomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for 404


];
