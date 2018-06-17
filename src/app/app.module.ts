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
import { FrostedGlassComponent } from './visual-effects/frosted-glass/frosted-glass.component';
import { TypographyComponent } from './typography/typography.component';
import { HyphenationComponent } from './typography/hyphenation/hyphenation.component';
import { CustomUnderlinesComponent } from './typography/custom-underlines/custom-underlines.component';
import { TextEffectsComponent } from './typography/text-effects/text-effects.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { DimmingComponent } from './user-experience/dimming/dimming.component';
import { ScrollingComponent } from './user-experience/scrolling/scrolling.component';
import { ImageCompareComponent } from './user-experience/image-compare/image-compare.component';
import { StructureAndLayoutComponent } from './structure-and-layout/structure-and-layout.component';
import { IntrinsicSizingComponent } from './structure-and-layout/intrinsic-sizing/intrinsic-sizing.component';
import { TableColumnWidthsComponent } from './structure-and-layout/table-column-widths/table-column-widths.component';
import { StyleBySiblingCountComponent } from './structure-and-layout/style-by-sibling-count/style-by-sibling-count.component';
import { AnimationsComponent } from './animations/animations.component';
import { ElasticTransitionsComponent } from './animations/elastic-transitions/elastic-transitions.component';
import { TypingAnimationComponent } from './animations/typing-animation/typing-animation.component';
import { SmoothTransitionComponent } from './animations/smooth-transition/smooth-transition.component';
import { CircularPathComponent } from './animations/circular-path/circular-path.component';
import { GridComponent } from './grid/grid.component';
import { PsuedoComponent } from './psuedo/psuedo.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { FlexComponent } from './flex/flex.component';


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
    FrostedGlassComponent,
    TypographyComponent,
    HyphenationComponent,
    CustomUnderlinesComponent,
    TextEffectsComponent,
    UserExperienceComponent,
    DimmingComponent,
    ScrollingComponent,
    ImageCompareComponent,
    StructureAndLayoutComponent,
    IntrinsicSizingComponent,
    TableColumnWidthsComponent,
    StyleBySiblingCountComponent,
    AnimationsComponent,
    ElasticTransitionsComponent,
    TypingAnimationComponent,
    SmoothTransitionComponent,
    CircularPathComponent,
    GridComponent,
    PsuedoComponent,
    TransitionsComponent,
    FlexComponent,



  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
