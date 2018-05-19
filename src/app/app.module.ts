import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TranslucentBordersComponent } from './translucent-borders/translucent-borders.component';
import { MultiBorderComponent } from './multi-border/multi-border.component';
import { FlexBackgroundPositionComponent } from './flex-background-position/flex-background-position.component';
import { StripedBackgroundComponent } from './striped-background/striped-background.component';
import { ComplexBackgroundComponent } from './complex-background/complex-background.component';
import { RandomBackgroundsComponent } from './random-backgrounds/random-backgrounds.component';
import { ContinuousImageBordersComponent } from './continuous-image-borders/continuous-image-borders.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslucentBordersComponent,
    MultiBorderComponent,
    FlexBackgroundPositionComponent,
    StripedBackgroundComponent,
    ComplexBackgroundComponent,
    RandomBackgroundsComponent,
    ContinuousImageBordersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
