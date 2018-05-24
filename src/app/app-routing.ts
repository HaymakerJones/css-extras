import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ShapesComponent } from './shapes/shapes.component';
import { VisualEffectsComponent } from './visual-effects/visual-effects.component';
import { TypographyComponent } from './typography/typography.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';


const routes: Routes = [
    { path: '', redirectTo: '/backgrounds', pathMatch: 'full' },
    { path: 'backgrounds', component: BackgroundsComponent },
    { path: 'shapes', component: ShapesComponent },
    { path: 'visual-effects', component: VisualEffectsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'user-experience', component: UserExperienceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }