import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TranslucentBordersComponent } from './translucent-borders/translucent-borders.component';
import { MultiBorderComponent } from './multi-border/multi-border.component';
import { FlexBackgroundPositionComponent } from './flex-background-position/flex-background-position.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslucentBordersComponent,
    MultiBorderComponent,
    FlexBackgroundPositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
