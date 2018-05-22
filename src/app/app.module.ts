import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';


import { AppComponent } from './app.component';
import { TranslucentBordersComponent } from './translucent-borders/translucent-borders.component';
import { MultiBorderComponent } from './multi-border/multi-border.component';
import { FlexBackgroundPositionComponent } from './flex-background-position/flex-background-position.component';
import { StripedBackgroundComponent } from './striped-background/striped-background.component';
import { ComplexBackgroundComponent } from './complex-background/complex-background.component';
import { RandomBackgroundsComponent } from './random-backgrounds/random-backgrounds.component';
import { ContinuousImageBordersComponent } from './continuous-image-borders/continuous-image-borders.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ShapesComponent } from './shapes/shapes.component';
import { FlexibleEllipseComponent } from './shapes/flexible-ellipse/flexible-ellipse.component';
import { ParallelogramComponent } from './shapes/parallelogram/parallelogram.component';
import { DiamondImageComponent } from './shapes/diamond-image/diamond-image.component';
import { CutoutCornersComponent } from './shapes/cutout-corners/cutout-corners.component';
import { TrapezoidTabsComponent } from './shapes/trapezoid-tabs/trapezoid-tabs.component';
import { VisualEffectsComponent } from './visual-effects/visual-effects.component';
import { OneSidedShadowsComponent } from './visual-effects/one-sided-shadows/one-sided-shadows.component';
import { ColorTintingComponent } from './visual-effects/color-tinting/color-tinting.component';




@NgModule({
  declarations: [
    AppComponent,
    TranslucentBordersComponent,
    MultiBorderComponent,
    FlexBackgroundPositionComponent,
    StripedBackgroundComponent,
    ComplexBackgroundComponent,
    RandomBackgroundsComponent,
    ContinuousImageBordersComponent,
    BackgroundsComponent,
    ShapesComponent,
    FlexibleEllipseComponent,
    ParallelogramComponent,
    DiamondImageComponent,
    CutoutCornersComponent,
    TrapezoidTabsComponent,
    VisualEffectsComponent,
    OneSidedShadowsComponent,
    ColorTintingComponent,
  

  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
