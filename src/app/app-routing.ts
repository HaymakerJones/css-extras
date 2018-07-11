import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ShapesComponent } from './shapes/shapes.component';
import { VisualEffectsComponent } from './visual-effects/visual-effects.component';
import { TypographyComponent } from './typography/typography.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { StructureAndLayoutComponent } from './structure-and-layout/structure-and-layout.component';
import { AnimationsComponent } from './animations/animations.component';
import { GridComponent } from './grid/grid.component';
import { PsuedoComponent } from './psuedo/psuedo.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { FlexComponent } from './flex/flex.component';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';
import { SelectorsComponent } from './selectors/selectors.component';


const routes: Routes = [
    { path: '', redirectTo: '/backgrounds', pathMatch: 'full' },
    { path: 'backgrounds', component: BackgroundsComponent },
    { path: 'shapes', component: ShapesComponent },
    { path: 'visual-effects', component: VisualEffectsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'user-experience', component: UserExperienceComponent },
    { path: 'structure-layout', component: StructureAndLayoutComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'grid', component: GridComponent },
    { path: 'pseudo', component: PsuedoComponent },
    { path: 'transitions', component: TransitionsComponent },
    { path: 'flex', component: FlexComponent },
    { path: 'box-shadow', component: BoxShadowComponent },
    { path: 'selectors', component: SelectorsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }