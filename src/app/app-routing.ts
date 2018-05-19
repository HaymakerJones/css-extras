import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ShapesComponent } from './shapes/shapes.component';


const routes: Routes = [
    { path: '', redirectTo: '/backgrounds', pathMatch: 'full' },
    { path: 'backgrounds', component: BackgroundsComponent },
    { path: 'shapes', component: ShapesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }