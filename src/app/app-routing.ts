import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ShapesComponent } from './shapes/shapes.component';
import { VisualEffectsComponent } from './visual-effects/visual-effects.component';
import { TypographyComponent } from './typography/typography.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { StructureAndLayoutComponent } from './structure-and-layout/structure-and-layout.component';
import { AnimationsComponent } from './animations/animations.component';


const routes: Routes = [
    { path: '', redirectTo: '/backgrounds', pathMatch: 'full' },
    { path: 'backgrounds', component: BackgroundsComponent },
    { path: 'shapes', component: ShapesComponent },
    { path: 'visual-effects', component: VisualEffectsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'user-experience', component: UserExperienceComponent },
    { path: 'structure-layout', component: StructureAndLayoutComponent },
    { path: 'animations', component: AnimationsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }